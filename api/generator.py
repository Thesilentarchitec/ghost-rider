import os
import random
import requests
import asyncio
import uuid
from moviepy import (
    VideoFileClip, 
    AudioFileClip, 
    TextClip, 
    CompositeVideoClip, 
    ColorClip
)
import edge_tts
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

# API Keys
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
PEXELS_API_KEY = os.getenv("PEXELS_API_KEY", "")

client = Groq(api_key=GROQ_API_KEY)

async def generate_script(topic):
    """Generates a short script using Groq."""
    if not GROQ_API_KEY:
        return f"Have you ever wondered about {topic}? It's a fascinating subject that experts are still studying today. Stay tuned for more amazing facts!"
    
    prompt = f"Write a very short, engaging script (about 30-40 words) for a faceless video about {topic}. The tone should be intriguing and fast-paced. Just the script text, no meta-commentary."
    
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="llama-3.1-8b-instant",
    )
    return chat_completion.choices[0].message.content

async def generate_audio(text, output_path, voice="en-US-ChristopherNeural"):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

def get_stock_videos(query, count=3):
    """
    Fetch stock videos from Pexels. 
    If no key, returns a list of public URLs.
    """
    if not PEXELS_API_KEY:
        return [
            "https://videos.pexels.com/video-files/3195333/3195333-uhd_1080_1920_25fps.mp4",
            "https://videos.pexels.com/video-files/3191572/3191572-uhd_1080_1920_25fps.mp4",
            "https://videos.pexels.com/video-files/3209828/3209828-uhd_1080_1920_25fps.mp4"
        ]
    
    headers = {"Authorization": PEXELS_API_KEY}
    url = f"https://api.pexels.com/videos/search?query={query}&per_page={count}&orientation=portrait"
    try:
        r = requests.get(url, headers=headers)
        data = r.json()
        video_urls = []
        for video in data.get('videos', []):
            files = video.get('video_files', [])
            # Prefer mobile-friendly files
            files = sorted(files, key=lambda x: x['width'])
            if files:
                video_urls.append(files[0]['link'])
        return video_urls if video_urls else get_stock_videos("nature") # Fallback
    except:
        return get_stock_videos("nature")

async def create_video(topic, output_filename):
    # 1. Scripting
    script = await generate_script(topic)
    print(f"Generated script: {script}")
    
    job_id = str(uuid.uuid4())
    temp_audio = f"temp_audio_{job_id}.mp3"
    temp_video_path = None
    
    # 2. Generate Audio
    await generate_audio(script, temp_audio)
    audio_clip = AudioFileClip(temp_audio)
    duration = audio_clip.duration
    
    # 3. Create Visuals
    video_urls = get_stock_videos(topic)
    
    try:
        selected_video_url = random.choice(video_urls)
        print(f"Downloading stock video from: {selected_video_url}")
        
        video_response = requests.get(selected_video_url, stream=True, headers={'User-Agent': 'Mozilla/5.0'})
        temp_video_path = f"temp_video_{job_id}.mp4"
        with open(temp_video_path, 'wb') as f:
            for chunk in video_response.iter_content(chunk_size=8192):
                if chunk: f.write(chunk)
            
        bg_clip = VideoFileClip(temp_video_path).subclipped(0, duration)
        
        # Resize/Crop to 720x1280 (9:16)
        w, h = bg_clip.size
        target_ratio = 720 / 1280
        current_ratio = w / h
        
        if current_ratio > target_ratio:
            bg_clip = bg_clip.resized(height=1280)
            w, h = bg_clip.size
            bg_clip = bg_clip.cropped(x1=w/2-360, y1=0, x2=w/2+360, y2=1280)
        else:
            bg_clip = bg_clip.resized(width=720)
            w, h = bg_clip.size
            bg_clip = bg_clip.cropped(x1=0, y1=h/2-640, x2=720, y2=h/2+640)
            
    except Exception as e:
        print(f"Failed to load stock video: {e}. Falling back to color clip.")
        bg_clip = ColorClip(size=(720, 1280), color=(24, 24, 27)).with_duration(duration)

    # 4. Add Text/Captions
    try:
        txt_clip = TextClip(
            text=script, 
            font_size=50, 
            color='white', 
            size=(600, None), 
            method='caption'
        ).with_duration(duration).with_position('center')
        
        final_video = CompositeVideoClip([bg_clip, txt_clip])
    except Exception as e:
        print(f"TextClip failed: {e}. Falling back to just BG.")
        final_video = bg_clip
    
    final_video = final_video.with_audio(audio_clip)
    
    # 5. Write file
    final_video.write_videofile(output_filename, fps=24, codec="libx264", audio_codec="aac")
    
    # Cleanup
    audio_clip.close()
    if bg_clip: bg_clip.close()
    if os.path.exists(temp_audio):
        os.remove(temp_audio)
    if temp_video_path and os.path.exists(temp_video_path):
        os.remove(temp_video_path)

if __name__ == "__main__":
    asyncio.run(create_video("Python Programming", "test_output.mp4"))

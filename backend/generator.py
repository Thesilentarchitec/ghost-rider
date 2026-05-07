import asyncio
import os
import random
import requests
from moviepy import (
    VideoFileClip, 
    AudioFileClip, 
    TextClip, 
    CompositeVideoClip, 
    ColorClip,
    vfx
)
import edge_tts
import uuid

# Placeholders for keys
PEXELS_API_KEY = os.getenv("PEXELS_API_KEY", "")

async def generate_audio(text, output_path, voice="en-US-ChristopherNeural"):
    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_path)

def get_stock_videos(query, count=3):
    """
    Mock or real Pexels search. 
    If no key, returns a list of local placeholders or public URLs.
    """
    if not PEXELS_API_KEY:
        # Return some public sample videos
        return [
            "https://p-def6.pstatic.net/600/600/600/600/600/600/600/600/600/600/600/600/600/600/600/600/sample.mp4" # Just a placeholder
        ]
    
    headers = {"Authorization": PEXELS_API_KEY}
    url = f"https://api.pexels.com/videos/search?query={query}&per_page={count}&orientation=portrait"
    r = requests.get(url, headers=headers)
    data = r.json()
    
    video_urls = []
    for video in data.get('videos', []):
        # Get the smallest HD file
        files = video.get('video_files', [])
        # Sort by width, pick one around 720 or 1080
        files = sorted(files, key=lambda x: x['width'])
        if files:
            video_urls.append(files[0]['link'])
    return video_urls

async def create_video(topic, output_filename):
    # 1. Scripting (Slightly improved mock)
    # In a real app, you'd call Groq/OpenAI here.
    script = (
        f"Have you ever wondered about {topic}? "
        f"It's a topic that has captured the imagination of many. "
        f"From its mysterious origins to its impact on the world today, {topic} continues to be a subject of intense study. "
        f"Thanks for watching this Ghost rider production!"
    )
    
    job_id = str(uuid.uuid4())
    temp_audio = f"temp_audio_{job_id}.mp3"
    
    # 2. Generate Audio
    await generate_audio(script, temp_audio)
    audio_clip = AudioFileClip(temp_audio)
    duration = audio_clip.duration
    
    # 3. Create Visuals
    # For now, let's use a ColorClip if no stock video is found or available
    # because downloading might fail or be slow in this environment without a key.
    
    bg_clip = ColorClip(size=(720, 1280), color=(24, 24, 27), duration=duration)
    
    # 4. Add Text/Captions
    # Note: TextClip might require ImageMagick. Let's see if we can use it.
    # If not, we might need to rely on other methods.
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
    if os.path.exists(temp_audio):
        os.remove(temp_audio)

if __name__ == "__main__":
    # Test
    asyncio.run(create_video("Python Programming", "test_output.mp4"))

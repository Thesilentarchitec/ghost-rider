from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel
import os
import asyncio
from generator import create_video
import uuid
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

OUTPUT_DIR = "/home/team/shared/ghost-rider/backend/output"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

class GenerateRequest(BaseModel):
    topic: str

@app.get("/")
def read_root():
    return {"status": "ok", "service": "Ghost rider Video Generator"}

@app.post("/generate")
async def generate_video_endpoint(request: GenerateRequest):
    print(f"Received generation request for topic: {request.topic}")
    job_id = str(uuid.uuid4())
    filename = f"{job_id}.mp4"
    filepath = os.path.join(OUTPUT_DIR, filename)
    
    # We run the generation
    try:
        await create_video(request.topic, filepath)
        return {"job_id": job_id, "video_url": f"/video/{job_id}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/video/{job_id}")
def get_video(job_id: str):
    filepath = os.path.join(OUTPUT_DIR, f"{job_id}.mp4")
    if os.path.exists(filepath):
        return FileResponse(filepath, media_type="video/mp4")
    else:
        raise HTTPException(status_code=404, detail="Video not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)

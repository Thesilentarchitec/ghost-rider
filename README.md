# Ghost rider

AI-powered faceless video generator.

## Tech Stack
- **Frontend:** Next.js, Tailwind CSS, Shadcn UI
- **Backend:** FastAPI, MoviePy, Edge TTS
- **AI:** Groq (Llama 3) for scripting, Pexels API for stock footage.

## Getting Started

### Backend
1. `cd backend`
2. `pip install -r requirements.txt`
3. Create a `.env` file with:
   ```
   GROQ_API_KEY=your_key_here
   PEXELS_API_KEY=your_key_here
   ```
4. `python app.py`

### Frontend
1. `npm install`
2. Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```
3. `npm run dev`

## Deployment
- Deploy the frontend to Vercel.
- Deploy the backend to Hugging Face Spaces or any other server that supports Python and FFmpeg.
- Set `NEXT_PUBLIC_BACKEND_URL` in Vercel to your backend's URL.

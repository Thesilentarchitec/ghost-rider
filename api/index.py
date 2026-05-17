from fastapi import FastAPI
app = FastAPI()

@app.get("/api/test")
def test():
    return {"message": "FastAPI on Vercel is working!"}

@app.get("/api")
def root():
    return {"message": "FastAPI Root at /api"}

@app.get("/test")
def test2():
    return {"message": "FastAPI test at /test"}

@app.get("/")
def root2():
    return {"message": "FastAPI Root at /"}

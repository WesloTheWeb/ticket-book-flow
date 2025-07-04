from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from Ticket Book Flow API"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
import os
from fastapi import FastAPI
from sqlmodel import SQLModel, create_engine
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

# Load environment variables from .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
engine = create_engine(DATABASE_URL, echo=True)

app = FastAPI()

# Enable CORS for Vercel frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://portfolio-mark22.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include contact router
from api.routes import contact
app.include_router(contact.router)

# Register publications router
from api.routes import publications
app.include_router(publications.router)

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)

# Health check endpoint
@app.get("/health")
def health():
    return {"status": "ok"}

# TODO: Add models, routes, and API logic here

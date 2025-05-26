from fastapi import APIRouter, HTTPException, status, Depends
from sqlmodel import Session
from ..schemas.contact import ContactCreate
from ..models.contact import Contact
from ..main import engine

router = APIRouter()

def get_session():
    with Session(engine) as session:
        yield session

@router.post("/contact", status_code=status.HTTP_201_CREATED)
def submit_contact(data: ContactCreate, session: Session = Depends(get_session)):
    contact = Contact(name=data.name, email=data.email, message=data.message)
    session.add(contact)
    session.commit()
    session.refresh(contact)
    return {"success": True, "message": "Message received!"} 
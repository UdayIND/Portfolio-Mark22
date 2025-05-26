from sqlmodel import SQLModel, Field
from typing import Optional

class Publication(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    authors: str
    year: int
    url: Optional[str] = None 
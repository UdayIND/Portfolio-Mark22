from pydantic import BaseModel
from typing import Optional

class Publication(BaseModel):
    title: str
    authors: str
    year: int
    url: Optional[str] = None 
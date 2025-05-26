from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from functools import lru_cache

router = APIRouter()

class Publication(BaseModel):
    title: str
    authors: str
    year: int
    url: str = None

# Static publication data (replace with real data or DB/API fetch as needed)
PUBLICATIONS = [
    Publication(title='Interactive 3D Web Portfolios', authors='U. Developer, A. Designer', year=2024, url=None),
    Publication(title='WebGL for Data Visualization', authors='U. Developer', year=2023, url=None),
    Publication(title='Accessible 3D UI Patterns', authors='A. Designer', year=2022, url=None),
]

@lru_cache(maxsize=1)
def get_cached_publications() -> List[Publication]:
    return PUBLICATIONS

@router.get('/publications', response_model=List[Publication])
def get_publications():
    return get_cached_publications() 
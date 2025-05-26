import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

client = TestClient(app)

def test_get_publications_success():
    response = client.get('/publications')
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert len(data) >= 1
    for pub in data:
        assert 'title' in pub
        assert 'authors' in pub
        assert 'year' in pub

def test_get_publications_validation():
    response = client.get('/publications')
    data = response.json()
    for pub in data:
        assert isinstance(pub['title'], str)
        assert isinstance(pub['authors'], str)
        assert isinstance(pub['year'], int)

def test_get_publications_cache():
    # Call twice and ensure data is the same (cache hit)
    data1 = client.get('/publications').json()
    data2 = client.get('/publications').json()
    assert data1 == data2

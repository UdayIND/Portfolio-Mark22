import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

client = TestClient(app)

def test_valid_submission():
    response = client.post("/contact", json={
        "name": "Test User",
        "email": "test@example.com",
        "message": "Hello!"
    })
    assert response.status_code == 201
    assert response.json()["success"] is True

def test_missing_fields():
    response = client.post("/contact", json={
        "name": "",
        "email": "",
        "message": ""
    })
    assert response.status_code == 422

def test_invalid_email():
    response = client.post("/contact", json={
        "name": "Test User",
        "email": "not-an-email",
        "message": "Hello!"
    })
    assert response.status_code == 422 
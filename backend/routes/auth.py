from fastapi import APIRouter, HTTPException, Depends
from datetime import datetime

from models.schemas import UserRegister, UserLogin
from database import users_collection

from auth.password import (
    hash_password,
    verify_password
)

from auth.jwt_handler import create_token
from auth.dependencies import get_current_user

from fastapi import Request
from rate_limiter import limiter

from services.google_auth import verify_google_token


router = APIRouter()


# -------------------------
# Register
# -------------------------

@router.post("/auth/register")
@limiter.limit("3/minute")  # Limit to 3 requests per minute
def register(
    request: Request,
    user: UserRegister
):

    # Check if email already exists
    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    # Create new user
    new_user = {
        "username": user.username,
        "email": user.email,
        "password": hash_password(user.password),
        "created_at": datetime.utcnow()
    }

    result = users_collection.insert_one(new_user)

    return {
        "message": "User registered successfully.",
        "user_id": str(result.inserted_id)
    }


# -------------------------
# Login
# -------------------------

@router.post("/auth/login")
@limiter.limit("5/minute")  # Limit to 5 requests per minute
def login(
    request: Request,
    user: UserLogin
):

    # Find user by email
    existing_user = users_collection.find_one(
        {"email": user.email}
    )

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password."
        )

    # Verify password
    if not verify_password(
        user.password,
        existing_user["password"]
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password."
        )

    # Generate JWT Token
    token = create_token(
        existing_user["_id"]
    )

    return {
        "message": "Login successful.",
        "access_token": token,
        "token_type": "Bearer"
    }

@router.get("/auth/me")
def get_profile(
    current_user=Depends(get_current_user)
):
    return {
        "message": "Authenticated successfully",
        "user": current_user
    }

@router.post("/auth/google")
def google_login(data: dict):

    user = verify_google_token(
        data["token"]
    )

    existing_user = users_collection.find_one(
        {
            "email": user["email"]
        }
    )

    if not existing_user:

        new_user = {

            "username": user["name"],

            "email": user["email"],

            "google": True

        }

        result = users_collection.insert_one(
            new_user
        )

        user_id = result.inserted_id

    else:

        user_id = existing_user["_id"]

    token = create_token(user_id)

    return {

        "access_token": token,

        "token_type": "Bearer"

    }
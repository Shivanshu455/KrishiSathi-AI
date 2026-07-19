from fastapi import APIRouter
from services.timeline_service import generate_timeline

router = APIRouter()


@router.get("/timeline/{crop}/{duration}")
def crop_timeline(crop: str, duration: int):

    return {
        "timeline": generate_timeline(
            crop,
            duration
        )
    }
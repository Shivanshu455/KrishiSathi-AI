from datetime import datetime, timedelta


def generate_timeline(crop_name, duration):

    start = datetime.today()

    timeline = [
        {
            "day": 1,
            "title": "Land Preparation",
            "icon": "🚜",
            "date": start.strftime("%d %b %Y")
        },
        {
            "day": 7,
            "title": "Sowing",
            "icon": "🌱",
            "date": (start + timedelta(days=7)).strftime("%d %b %Y")
        },
        {
            "day": 20,
            "title": "First Irrigation",
            "icon": "💧",
            "date": (start + timedelta(days=20)).strftime("%d %b %Y")
        },
        {
            "day": 35,
            "title": "Fertilizer Application",
            "icon": "🌿",
            "date": (start + timedelta(days=35)).strftime("%d %b %Y")
        },
        {
            "day": 60,
            "title": "Pest Inspection",
            "icon": "🐛",
            "date": (start + timedelta(days=60)).strftime("%d %b %Y")
        },
        {
            "day": duration,
            "title": "Harvest",
            "icon": "🌾",
            "date": (start + timedelta(days=duration)).strftime("%d %b %Y")
        }
    ]

    return timeline
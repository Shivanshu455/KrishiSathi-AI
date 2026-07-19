from database import db

farm_profile_collection = db["farm_profiles"]


def create_farm_profile(profile):

    return farm_profile_collection.insert_one(profile)


def get_farm_profile(user_id):

    return farm_profile_collection.find_one({

        "user_id": user_id

    })


def update_farm_profile(user_id, profile):

    return farm_profile_collection.update_one(

        {

            "user_id": user_id

        },

        {

            "$set": profile

        }

    )
from types import SimpleNamespace

from services.crop_recommender import recommend_crops

farm = SimpleNamespace(
    soil_type="Loamy",
    temperature=27,
    month="July"
)

recommendations = recommend_crops(farm)

for crop in recommendations:

    print()

    print(crop["crop"])

    print("Score:", crop["score"])

    print("Reasons:", crop["reasons"])
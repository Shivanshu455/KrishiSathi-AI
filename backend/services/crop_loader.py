import json
import os


def load_crops():

    current_dir = os.path.dirname(__file__)

    file_path = os.path.join(
        current_dir,
        "..",
        "data",
        "crops_v2.json"
    )

    with open(file_path, "r") as file:
        return json.load(file)
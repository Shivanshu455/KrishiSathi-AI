traffic_data = {
    "Delhi": {
        "travel_time": 6,
        "fuel_cost": 1800
    },

    "Jaipur": {
        "travel_time": 2,
        "fuel_cost": 500
    },

    "Chandigarh": {
        "travel_time": 0.5,
        "fuel_cost": 100
    }
}


def get_transport_info(city):

    return traffic_data.get(
        city,
        {
            "travel_time": 3,
            "fuel_cost": 1000
        }
    )
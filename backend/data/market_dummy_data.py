# ==========================================
# Government MSP (Dummy Data)
# ==========================================

MSP_DATA = {

    "Wheat": {
        "msp": 2425,
        "season": "Rabi"
    },

    "Rice": {
        "msp": 2300,
        "season": "Kharif"
    },

    "Maize": {
        "msp": 2400,
        "season": "Kharif"
    },

    "Mustard": {
        "msp": 5950,
        "season": "Rabi"
    }

}


# ==========================================
# Market Prices
# ==========================================

MARKET_DATA = {

    "Wheat": [

        {
            "market": "Dehradun Mandi",
            "district": "Dehradun",
            "price": 3280,
            "distance": 12,
            "travel_time": "25 mins",
            "fuel_cost": 180
        },

        {
            "market": "Haridwar Mandi",
            "district": "Haridwar",
            "price": 3220,
            "distance": 38,
            "travel_time": "55 mins",
            "fuel_cost": 420
        },

        {
            "market": "Roorkee Mandi",
            "district": "Haridwar",
            "price": 3170,
            "distance": 47,
            "travel_time": "1 hr",
            "fuel_cost": 520
        }

    ],

    "Rice": [

        {
            "market": "Dehradun Mandi",
            "district": "Dehradun",
            "price": 4180,
            "distance": 12,
            "travel_time": "25 mins",
            "fuel_cost": 180
        },

        {
            "market": "Haridwar Mandi",
            "district": "Haridwar",
            "price": 4100,
            "distance": 38,
            "travel_time": "55 mins",
            "fuel_cost": 420
        },

        {
            "market": "Roorkee Mandi",
            "district": "Haridwar",
            "price": 4040,
            "distance": 47,
            "travel_time": "1 hr",
            "fuel_cost": 520
        }

    ],

    "Maize": [

        {
            "market": "Dehradun Mandi",
            "district": "Dehradun",
            "price": 2550,
            "distance": 12,
            "travel_time": "25 mins",
            "fuel_cost": 180
        },

        {
            "market": "Haridwar Mandi",
            "district": "Haridwar",
            "price": 2490,
            "distance": 38,
            "travel_time": "55 mins",
            "fuel_cost": 420
        }

    ],

    "Mustard": [

        {
            "market": "Jaipur Mandi",
            "district": "Jaipur",
            "price": 6480,
            "distance": 25,
            "travel_time": "40 mins",
            "fuel_cost": 260
        },

        {
            "market": "Kota Mandi",
            "district": "Kota",
            "price": 6390,
            "distance": 55,
            "travel_time": "1 hr 15 mins",
            "fuel_cost": 510
        }

    ]

}


# ==========================================
# Last 7 Days Price History
# ==========================================

PRICE_HISTORY = {

    "Wheat": [
        3050,
        3090,
        3140,
        3180,
        3220,
        3250,
        3280
    ],

    "Rice": [
        3920,
        3960,
        4010,
        4060,
        4100,
        4140,
        4180
    ],

    "Maize": [
        2310,
        2360,
        2400,
        2440,
        2470,
        2510,
        2550
    ],

    "Mustard": [
        6010,
        6120,
        6200,
        6290,
        6350,
        6410,
        6480
    ]

}
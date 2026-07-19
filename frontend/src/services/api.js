const API_BASE_URL = "http://127.0.0.1:8000";

// --------------------
// JWT Helper
// --------------------

const getToken = () => {
  return localStorage.getItem("token");
};

// --------------------
// Authentication APIs
// --------------------

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  return response.json();
};

// --------------------
// Farm APIs
// --------------------

export const getFarmStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/farm/status`);
  return response.json();
};

export const getAllFarms = async () => {
  const response = await fetch(`${API_BASE_URL}/farm`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.json();
};

export const getFarmById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/farm/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.json();
};

export const createFarm = async (farmData) => {
  const response = await fetch(`${API_BASE_URL}/farm/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(farmData),
  });

  return response.json();
};

export const recommendCrops = async (plannerData) => {

    const response = await fetch(

        `${API_BASE_URL}/recommend-crops`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(plannerData)

        }

    );

    return response.json();

};

export const generateCultivationPlan = async (data) => {

    const response = await fetch(
        `${API_BASE_URL}/generate-cultivation-plan`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    return response.json();
};

export const getWeather = async (city) => {

    const response = await fetch(
        `${API_BASE_URL}/weather/${encodeURIComponent(city)}`
    );

    if (!response.ok) {
        throw new Error("Unable to fetch weather.");
    }

    return response.json();
};

export const simulateProfit = async (cropNames) => {

    const response = await fetch(
        `${API_BASE_URL}/profit-simulation`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                crops: cropNames
            })
        }
    );

    return response.json();

};
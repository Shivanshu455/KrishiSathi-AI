const API_BASE_URL = "http://127.0.0.1:8000"

export const getFarmStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/farm/status`)
  return response.json()
}

export const getAllFarms = async () => {
  const response = await fetch(`${API_BASE_URL}/farm`)
  return response.json()
}

export const getFarmById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/farm/${id}`)
  return response.json()
}

export const createFarm = async (farmData) => {
  const response = await fetch(`${API_BASE_URL}/farm/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(farmData)
  })

  return response.json()
}
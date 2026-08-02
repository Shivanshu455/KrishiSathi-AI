import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function getMarketInsight(data) {

    const response = await axios.post(

        `${API}/market-insight/`,

        data

    );

    return response.data;

}
import axios from "axios";

export const obtenerClimaService = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=-34.9033&longitude=-56.1882&daily=temperature_2m_max%2Ctemperature_2m_min&timezone=auto`;
    const response = await axios.get(url);
    return response.data;
};
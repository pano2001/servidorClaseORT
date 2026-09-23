import { obtenerTesoroService, obtenerTesorosService } from "../services/tesoros.services.js";

export const obtenerTesoros = async (req, res) => {
    const tesoros = await obtenerTesorosService();
    res.json(tesoros);
}

export const obtenerTesoro = async (req, res) => {
    const { id } = req.params;
    const tesoro = await obtenerTesoroService(id);
    res.json(tesoro);
}
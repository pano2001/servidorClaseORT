import Tesoro from "../models/tesoro.model.js";

export const obtenerTesorosService = async () => {
    const tesoros = await Tesoro.find().populate("dragon");
    return tesoros;
}

export const obtenerTesoroService = async (id) => {
    const tesoro = await Tesoro.findById(id).populate("dragon");
    return tesoro;
}
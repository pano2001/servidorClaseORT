import Dragon from "../models/dragon.model.js";

export const obtenerDragonesService = async () => {
    const dragones = await Dragon.find().populate("tesoros", "-dragon");
    return dragones;
}


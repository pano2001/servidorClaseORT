import { obtenerDragonesService } from "../services/dragones.services.js";

export const obtenerDragones = async (req, res) => {
    const dragones = await obtenerDragonesService();
    res.json(dragones);
}
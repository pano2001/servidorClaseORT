import {obtenerMascotasService, guardarMascotaService, obtenerMascotaService, 
    actualizarMascotaService, eliminarMascotaService} from "../services/mascotas.services.js";

export const obtenerMascotas = async (req, res) => {
    const busqueda = req.query//{vacunado:true}
    const mascotas = await obtenerMascotasService(busqueda);
    res.status(200).json({ mascotas });
}

export const obtenerMascota = async (req, res) => {
    const { id } = req.params;
    const mascota = await obtenerMascotaService(id);
    res.status(200).json({ mascota });
}
export const actualizarMascota = async (req, res) => {
    const { id } = req.params;
    const mascotaActualizada = await actualizarMascotaService(id, req.body);
    res.status(200).json({ mascota: mascotaActualizada });
}
export const guardarMascota = async (req, res) => {
    const nuevaMascota = await guardarMascotaService(req.body);
    res.status(201).json({ mascota: nuevaMascota });
}

export const eliminarMascota = async (req, res) => {
    const { id } = req.params;
    const mascotaEliminada = await eliminarMascotaService(id);
    res.status(200).json({ mascota: mascotaEliminada });
}


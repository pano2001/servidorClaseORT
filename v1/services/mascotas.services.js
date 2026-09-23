import mongoose from "mongoose";
import { isValidObjectId } from "mongoose";
import Mascota from "../models/mascota.model.js";

export const obtenerMascotasService = async (busqueda) => {
    console.log(busqueda);//{vacunado:true,edad:3}

    let { limit = 10, page = 1, ...criterio } = busqueda;
    let skip = (page - 1) * limit;
    console.log(criterio);
    const mascotas = await Mascota.find(criterio).skip(skip).limit(limit);
    const mascotasTotales = await Mascota.countDocuments(criterio);
    const totalPages = Math.ceil(mascotasTotales / limit);
    return {
        mascotas,
        totalPages,
        currentPage: Number(page)
    };
    //const mascotas = await Mascota.find(busqueda);
    return mascotas;
}

export const obtenerMascotaService = async (id) => {
    if (!isValidObjectId(id)) {
        const errorId = new Error("El id de la mascota no es válido");
        errorId.status = 400;
        throw errorId;
    }
    const mascota = await Mascota.findById(id);
    if (!mascota) {
        const errorNotFound = new Error("Mascota no encontrada");
        errorNotFound.status = 404;
        throw errorNotFound;
    }
    return mascota;
}

export const guardarMascotaService = async (mascotaData) => {
    const nuevaMascota = new Mascota(mascotaData);
    await nuevaMascota.save();
    return nuevaMascota;
}

export const actualizarMascotaService = async (id, mascotaData) => {
    const mascotaActualizada = await Mascota.findByIdAndUpdate(id,
        mascotaData, { returnDocument: 'after' });
    return mascotaActualizada;
}

export const eliminarMascotaService = async (id) => {
    if (!isValidObjectId(id)) {
        const errorId = new Error("El id de la mascota no es válido");
        errorId.status = 400;
        throw errorId;
    }

    const mascotaEliminada = await Mascota.findByIdAndDelete(id);
    if (!mascotaEliminada) {
        const errorNotFound = new Error("Mascota no encontrada");
        errorNotFound.status = 404;
        throw errorNotFound;
    }

    return mascotaEliminada;

}
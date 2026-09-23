import { obtenerAnimalesService, 
    guardarAnimalService,
obtenerAnimalService,
actualizarAnimalService,
eliminarAnimalService } from "../services/animales.services.js";    

export const obtenerAnimales = async (req, res) => {
    const animales = await obtenerAnimalesService();
    res.status(200).json({ animales });
}

export const obtenerAnimal = async (req, res) => {
    const { id } = req.params;
    const animal = await obtenerAnimalService(id);
    res.status(200).json({ animal });
}

export const guardarAnimal = async (req, res) => {
    const animalUsuario = req.body;
    const animalGuardado = await guardarAnimalService(animalUsuario);
    res.status(201).json({ animalGuardado });
}

export const actualizarAnimal = async (req, res) => {
    const { id } = req.params;
    const animalUsuario = req.body;
    const animalActualizado = await actualizarAnimalService(id, animalUsuario);
    res.status(201).json({ animalActualizado });
}

export const eliminarAnimal = async (req, res) => {
    const { id } = req.params;
    const animalEliminado = await eliminarAnimalService(id);
    res.status(200).json({ animalEliminado });
}
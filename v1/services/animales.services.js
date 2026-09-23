import Animal from "../models/animal.model.js";

export const obtenerAnimalesService = async () => {
    const animales = await Animal.find();
    return animales;
}

export const obtenerAnimalService = async (id) => {
    const animal = await Animal.findById(id);
    return animal;
}

export const guardarAnimalService = async (animalData) => {
    const nuevoAnimal = new Animal(animalData);
    await nuevoAnimal.save();
    return nuevoAnimal;
}

export const actualizarAnimalService = async (id, animalData) => {
    const animalActualizado = await Animal.findByIdAndUpdate(id, 
        animalData, {returnDocument: 'after'});
    return animalActualizado;
}

export const eliminarAnimalService = async (id) => {
    //todo isValidObjectId
    const animalEliminado = await Animal.findByIdAndDelete(id);
    return animalEliminado;
}
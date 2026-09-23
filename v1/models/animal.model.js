/* import mongoose from "mongoose";
const animalSchema = new mongoose.Schema({}); */

import mongoose, {Schema} from "mongoose";

const animalSchema = new Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    edad: { type: Number, required: true }
});

/* const animalSchema = new Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    edad: { type: Number, required: true }
}, { collection: "animales" }); */

export default mongoose.model("Animal", animalSchema, "animales");
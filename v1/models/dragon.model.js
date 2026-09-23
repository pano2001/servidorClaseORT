import mongoose, {Schema} from "mongoose";
import Tesoro from "./tesoro.model.js";

const dragonSchema = new Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: false },
    edad: { type: Number, required: false },
    tesoros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tesoro" }]
});

export default mongoose.model("Dragon", dragonSchema, "dragones");
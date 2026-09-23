import mongoose, { Schema } from "mongoose";
import Dragon from "./dragon.model.js";

const tesoroSchema = new Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: false },
    valor: { type: Number, required: false },
    dragon: { type: mongoose.Schema.Types.ObjectId, ref: "Dragon" }
}, { collection: "tesoros", timestamps: true });

export default mongoose.model("Tesoro", tesoroSchema);

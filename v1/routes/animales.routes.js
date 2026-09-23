import express from "express";
import { guardarAnimal, 
    obtenerAnimales,
obtenerAnimal,
actualizarAnimal,
eliminarAnimal } from "../controllers/animales.controllers.js";

const router = express.Router({ mergeParams: true });

router.get("/", obtenerAnimales);
router.get("/:id", obtenerAnimal);
router.post("/", guardarAnimal);
router.patch("/:id", actualizarAnimal);
router.delete("/:id", eliminarAnimal);

export default router;
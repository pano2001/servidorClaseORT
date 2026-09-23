import express from "express";
import { obtenerMascotas,
obtenerMascota,
guardarMascota,
actualizarMascota,
eliminarMascota } from "../controllers/mascotas.controllers.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { actualizarMascotaSchema, agregarMascotaSchema } from "../validators/mascotas.validators.js";

const router = express.Router({ mergeParams: true });

router.get("/", obtenerMascotas);
router.get("/:id", obtenerMascota);
router.post("/", validateBodyMiddleware(agregarMascotaSchema), guardarMascota);
router.patch("/:id", validateBodyMiddleware(actualizarMascotaSchema), actualizarMascota);
router.delete("/:id", eliminarMascota);

export default router;
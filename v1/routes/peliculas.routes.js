import express from "express";
import { agregarPelicula, obtenerPeliculas, obtenerPelicula, eliminarPelicula } from "../controllers/peliculas.controllers.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { agregarPeliculaSchema } from "../validators/peliculas.validators.js";

const router = express.Router({ mergeParams: true });

router.get("/", obtenerPeliculas);
router.get("/:id", obtenerPelicula);
router.post("/", validateBodyMiddleware(agregarPeliculaSchema), agregarPelicula);
router.delete("/:id", eliminarPelicula);

export default router;
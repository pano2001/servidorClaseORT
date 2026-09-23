import express from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { agregarUsuario } from "../controllers/usuarios.controllers.js";
import { agregarUsuarioSchema } from "../validators/usuarios.validators.js";

const router = express.Router({ mergeParams: true });

router.post("/", validateBodyMiddleware(agregarUsuarioSchema), agregarUsuario);

export default router;
import express from "express";
import { authenticateToken } from "./middlewares/authorization.middleware.js";
import ciudadesRouter from "./routes/ciudades.routes.js"
import peliculasRouter from "./routes/peliculas.routes.js"
import usuariosRouter from "./routes/usuarios.routes.js"
import authRouter from "./routes/auth.routes.js"
import snailsRouter from "./routes/snails.routes.js"
import animalesRouter from "./routes/animales.routes.js"
import mascotasRouter from "./routes/mascotas.routes.js"
import dragonesRouter from "./routes/dragones.routes.js"
import tesorosRouter from "./routes/tesoros.routes.js"
import climaRouter from "./routes/clima.routes.js"
import aiRouter from "./routes/ai.routes.js"
import uploadsRouter from "./routes/uploads.routes.js"

const router = express.Router({mergeParams:true});
//llego con peticiones que lleguen a /v1

router.use("/auth", authRouter);
router.use("/animales", animalesRouter);
router.use("/mascotas", mascotasRouter);
router.use("/dragones", dragonesRouter);
router.use("/tesoros", tesorosRouter);
router.use("/clima", climaRouter);
router.use("/ai", aiRouter);
router.use("/uploads", uploadsRouter);

router.use(authenticateToken);

//Rutas protegidas
router.use("/ciudades", ciudadesRouter);
router.use("/peliculas", peliculasRouter);
router.use("/usuarios", usuariosRouter);
router.use("/snails", snailsRouter);

export default router;
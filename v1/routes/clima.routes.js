import express from "express";

import { obtenerClima } from "../controllers/clima.controllers.js";

const router = express.Router({mergeParams: true});

router.get("/", obtenerClima);

export default router;
import express from "express";
import { obtenerDragones } from "../controllers/dragones.controllers.js";

const router = express.Router({mergeParams: true});

router.get("/", obtenerDragones);

export default router;
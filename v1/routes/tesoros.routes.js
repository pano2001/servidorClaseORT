import express from "express";
import { obtenerTesoros, obtenerTesoro } from "../controllers/tesoros.controllers.js";

const router = express.Router({mergeParams: true});

router.get("/", obtenerTesoros);
router.get("/:id", obtenerTesoro);

export default router;
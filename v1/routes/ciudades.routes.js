import express from "express";
import {agregarCiudad, obtenerCiudades, obtenerCiudad} from "../controllers/ciudades.controllers.js";

const router = express.Router({mergeParams:true});

router.use("/", (req, res, next) => {
    console.log("Middleware de ciudades");
    next(); 
});

router.get("/", obtenerCiudades);
router.get("/:idCiudad", obtenerCiudad);
router.post("/", agregarCiudad);

export default router;
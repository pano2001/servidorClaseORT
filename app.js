import "dotenv/config";
import express from "express";
import cors from "cors";
//import "./v1/config/db.config.js";
import connectDB from "./v1/config/db.config.js";
import notFoundMiddleware from "./v1/middlewares/notFound.middleware.js";
import v1 from "./v1/v1.routes.js";
import { errorMiddleware } from "./v1/middlewares/error.middleware.js";

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Nueva respuesta desde el servidor");
})

app.use("/v1", v1 );

//app.use("/v2", v2 );

app.get("/personas", (req, res) => {

    res.json({ mensaje: "Lista de las personas", 
        query: req.query })
});

app.get("/paises", (req, res) => {
    res.json({ mensaje: "Lista de los paises" })
});

app.post("/paises", (req, res) => {
    res.json({ mensaje: "Se ha creado un nuevo pais" })
});

app.put("/paises", (req, res) => {
    res.json({ mensaje: "Se ha modificado un  pais" })
});

app.patch("/paises", (req, res) => {
    res.json({ mensaje: "Se ha actualizado un pais" })
});

app.delete("/paises", (req, res) => {
    res.json({ mensaje: "Se ha eliminado un pais" })
});

app.get("/traslado/:desde-:hacia", (req, res) => {
    const {desde, hacia} = req.params;
    res.json({mensaje: "resp", datos:req.params});
})

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
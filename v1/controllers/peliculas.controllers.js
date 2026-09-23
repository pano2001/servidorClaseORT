import peliculas from "../data/peliculas.data.js";
import {tituloSchema, agregarPeliculaSchema} from "../validators/peliculas.validators.js";


export const agregarPelicula = (req, res) => {
    //res.status(400);

    //const objPelicula = req.body;
    const objPelicula = req.validatedBody;
    const titulo = objPelicula.titulo;
    const peliculaBuscada = peliculas.find(p => p.titulo.toLowerCase() === titulo.toLowerCase());
    if(peliculaBuscada){
        return res.status(409).json({mensaje: "La pelicula ya existe"});
    }

/*     const {error, value} = agregarPeliculaSchema.validate(objPelicula);
    if(error){
        return res.status(400).json({mensaje: "Error en el titulo", 
            error: error.details});
    }
    console.log(value); */

    const peliculaAgregada = {id: peliculas.at(-1)?.id + 1 || 1, titulo};
    peliculas.push(peliculaAgregada);
    return res.status(200).json({mensaje: "OK", peliculaAgregada, value});

    /* const {titulo} = req.body;
    const peliculaBuscada = peliculas.find(p => p.titulo.toLowerCase() === titulo.toLowerCase());
    if(peliculaBuscada){
        return res.status(409).json({mensaje: "La pelicula ya existe"});
    }

    const {error, value} = tituloSchema.validate(titulo);
    if(error){
        return res.status(400).json({mensaje: "Error en el titulo", error: error.details});
    }

    const peliculaAgregada = {id: peliculas.at(-1)?.id + 1 || 1, titulo};
    peliculas.push(peliculaAgregada);
    return res.status(200).json({mensaje: "OK", peliculaAgregada}); */
}

export const obtenerPeliculas = (req, res) => {
    res.status(200).json({mensaje: "Peliculas obtenidas", peliculas});
}

export const obtenerPelicula = (req, res) => {
    //let idCiudad = req.params.idCiudad
    let { id } = req.params;
    const pelicula = peliculas.find(p => p.id === Number(id));
    if(!pelicula){
        return res.status(404).json({mensaje: "Pelicula no encontrada"});
    }
    res.json({mensaje: `Pelicula obtenida`, pelicula});
}



export const eliminarPelicula = (req, res) => {
    let { id } = req.params;
    let pelicula = peliculas.find(p => p.id === Number(id));
    if(!pelicula){
        return res.status(404).json({mensaje: "Pelicula no encontrada"});
    }
    let pos = peliculas.findIndex(p => p.id === Number(id));
    peliculas.splice(pos, 1);

   /* peliculas = peliculas.filter(p => p.id !== Number(id)); */
    return res.status(200).json({mensaje: "Pelicula eliminada"});
}
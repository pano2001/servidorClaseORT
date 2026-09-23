export const obtenerCiudades = (req, res) => {
    res.json({mensaje: "En router de ciudades por GET"});
}

export const obtenerCiudad = (req, res) => {
    //let idCiudad = req.params.idCiudad
    let { idCiudad } = req.params;
    res.json({mensaje: `El id es: ${idCiudad}`});
}

export const agregarCiudad = (req, res) => {
    //res.status(400);
    const ciudad = req.body;
    if(!ciudad.nombre){
        return res.status(400).json({mensaje: "Falta el nombre de la ciudad"});
    }
    return res.status(200).json({mensaje: "OK", datos: req.body});
}
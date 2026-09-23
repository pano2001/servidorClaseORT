export const agregarUsuario = (req, res) => {
    const usuario = req.validatedBody;
    return res.status(200).json({ message: "Usuario agregado", data: usuario, usuario });
}
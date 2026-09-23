import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

let usuarios = [];


export const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Usuario y contraseña son requeridos" });
    }
    const userFound = usuarios.find(u => u.username === username);
    if (!userFound) {
        return res.status(401).json({ message: "Usuario y/o contraseña incorrectos" });
    }
    const valid = bcrypt.compareSync(password, userFound.hashedPassword);
    if (!valid) {
        return res.status(401).json({ message: "Usuario y/o contraseña incorrectos" });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login exitoso", token });
}

export const register = (req, res) => {
    const { username, password } = req.body;
    const userFound = usuarios.find(u => u.username === username);
    if (userFound) {
        return res.status(409).json({ message: "Usuario ya existe" });
    }
    const hashedPassword = bcrypt.hashSync(password, Number(process.env.SALTING_ROUNDS));
    const newUser = {
        username,
        hashedPassword
    };

    usuarios.push(newUser);
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "Usuario registrado exitosamente", token });
}
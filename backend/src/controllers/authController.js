import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/usersModel.js";

export const register = async (req, res) => {
    try {
        console.log("Llego al register", req.body)
        const {name, lastname, email, password } = req.body;

        if (!name || !lastname || !email || !password) {
            return res.status(400).json({message: "Todos los campos son obligatorios "});
        }

        const existingUser = await findUserByEmail(email);
        console.log("existingUser", existingUser)
        if (existingUser) {
            return res.status(409).json({ message: "El email ya está registrado"});
        }

        const passwordHash = await bcrypt.hash(password, 10);
        console.log("passwordHash creado");

        const user = await createUser(name, lastname, email, passwordHash);
        console.log("usuario creado en la db", user)

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        console.log("token generado")

        return res.status(201).json({
            message: "Usuario creado con éxito", user, token
        });
    } catch (error) {
        console.error("Error en register:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};
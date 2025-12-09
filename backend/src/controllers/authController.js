import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/usersModel.js";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
    try {
        const {name, lastname, email, password } = req.body;

        if (!name || !lastname || !email || !password) {
            return res.status(400).json({message: "Todos los campos son obligatorios "});
        }

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: "El email ya está registrado"});
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await createUser(name, lastname, email, passwordHash);
        const token = generateToken(user.id);
        return res.status(201).json({
            message: "Usuario creado con éxito", user, token
        });

    } catch (error) {
        console.error("Error en register:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son obligatorios" });
        } 

        const user = await findUserByEmail(email);

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch || !user) {
            return res.status(401).json({ message: "Email o contraseña incorrecta" })
        }

        const token = generateToken(user.id);

        return res.status(200).json({ 
            message: "Usuario logeado",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                created_at: user.created_at
            }
        });

    } catch (error) {
        console.log("Error en el login:", error);
        return res.status(500).json({ message: "Error del servidor" });
    }
};
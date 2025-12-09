import express from "express";
import { register, login } from "../controllers/authController.js";
import { auth } from "../middleware/auth.js";
import { findUserById } from "../models/usersModel.js";

const router = express.Router();

router.use((req, res, next) => {
    console.log("Entro a /api/auth", req.method, req.path);
    next();
})

router.post("/registro", register);

router.use((req, res, next) => {
    console.log("Entro a /api/auth", req.method, req.path);
    next();
});

router.post("/login", login)

router.get("/perfil", auth, async (req, res) => {
    try {
        const user = await findUserById(req.user);

        if(!user) {
            return res.status(404).json({ message: "Usuario no encontrado"})
        }
        res.json(user);

    } catch(error) {
        console.log("Error en /perfil", error);
        res.status(500).json({ message: "Error del servidor" });
    }
});

export default router;
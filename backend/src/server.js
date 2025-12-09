import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)

app.get("/api/test", async (req, res) => {
    try {
        console.log("Entró a /api/test")
        console.log("→ Ejecutando consulta a Postgres...");

        const result = await pool.query("SELECT NOW()");
        console.log("Repuesta de postgres", result.rows);

        return res.json({ 
            ok: true, 
            time: result.rows[0].now 
        });

    } catch (err) {
        console.error("ERROR /api/test:", err)
        return res.status(500).json({ ok: false, error: err.message });
    }
});

app.listen(4000, () => console.log("Corriendo en http://localhost:4000"));

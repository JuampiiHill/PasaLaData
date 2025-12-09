import { pool } from "../config/db.js";

export const createUser = async (name, lastname, email, password) => {
    const result = await pool.query(
        `INSERT INTO users (name, lastname, email, password)
         VALUES ($1, $2, $3, $4)
         RETURNING id, name, email, created_at`,
         [name, lastname, email, password]
    );

    console.log("Insert OK. Resultado", result.rows[0])
    return result.rows[0];
};

export const findUserByEmail = async (email) => {
    const result = await pool.query(
        `SELECT * FROM users WHERE email = $1`,
        [email]
    );

    console.log("Resultado finUser", result.rows[0])
    return result.rows[0];
};
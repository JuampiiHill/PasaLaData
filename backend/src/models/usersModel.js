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
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];

    const { rows } = await pool.query(query, values);
    return rows[0];
};

export const findUserById = async(id) => {
    const { rows } = await pool.query(
        "SELECT id, name, lastname, email, created_at FROM users WHERE id = $1",
        [id]
    );
    return rows[0];
};
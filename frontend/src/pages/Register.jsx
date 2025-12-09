import '../styles.css'
import { useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
    
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({  ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit ejecutado")
        console.log("form enviado", form)

        try {
            const res = await axios.post("http://localhost:4000/api/auth/registro", form);
            console.log(res.data)
            toast.success("Usuario creado con éxito");

            console.log("TOKEN:", res.data.token);

            localStorage.setItem("token", res.data.token);
        } catch (error) {
            console.log("Error desde el front", error)
            toast.error(error.response?.data?.message || "Error al registrarse")
        }
    };

    return(
        <div className="form-container">
            <div className="form-box">
                <h1 className="title">Registrarse</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nombre" onChange={handleChange}/>
                    <input type="text" name="lastname" placeholder="Apellido" onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Contraseña" onChange={handleChange}/>

                        <button type="submit">Registrarme</button>

                    <p className='login'>Tienes un cuenta? <a href="/login">Inicia Sesión</a></p>
                </form>
            </div>
        </div>
    );
}

export default Register;
import '../styles.css'
import { Link } from "react-router-dom";

function Register() {
    return(
        <div className="form-container">
            <div className="form-box">
                <h1 className="title">Registrarse</h1>

                <form>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Apellido" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />

                    <Link to="/">
                        <button type="button">Registrarme</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
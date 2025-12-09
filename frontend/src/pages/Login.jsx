import '../styles.css'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <div className="form-container">
            <div className="form-box">
                <h1 className="title">Iniciar Sesión</h1>

                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Contraseña" />

                    <Link to="/panel">
                        <button type="button">Ingresar</button>
                    </Link>
                    <p className='register'>No tienes una cuenta? <a href="/registro">Registrate</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
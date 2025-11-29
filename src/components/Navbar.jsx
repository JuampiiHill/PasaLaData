import '../styles.css'
import logo from '../assets/logo (Copiar).png'
import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="navbar">
            <div className='div-logo-title'>
                <Link to ="/">
                <img src={logo} alt='logo-img' className='logo-navbar'></img>
                </Link>
                <h2 className='title-nav'>PasaLaData</h2>
            </div>
            <div className='div-buttons-navbar'>
                <Link to ="/registro">
                    <button type='button' className="btn-register-navbar">Registrarse</button>
                </Link>
                <Link to ="/login">
                    <button type="button" className="btn-login-navbar">Iniciar Sesión</button>
                </Link>
            </div>
        </nav>
    )
}
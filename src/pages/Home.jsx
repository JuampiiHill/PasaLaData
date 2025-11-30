import '../styles.css'
import { Link } from 'react-router-dom';

function Home() {
    return (

    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-slogan">“La forma más fácil de invitar.”</p>
          <h1 className="hero-title">Organizá tus eventos y compartí invitaciones en segundos</h1>
          <p className="hero-sub">
            Con <strong>PasaLaData</strong> podés crear invitaciones digitales, generar un enlace único y recibir confirmaciones de tus invitados sin complicaciones. Todo desde un solo lugar, simple y rápido.
          </p>

          <div className="hero-ctas">
            <Link to="/registro">
              <button className="btn-primary">Crear mi invitación</button>
            </Link>
            <Link to="/login">
              <button className="btn-secondary">Iniciar sesión</button>
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-paper" />
            <div className="visual-bubble">¡Invita ahora!</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
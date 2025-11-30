import { Link } from "react-router-dom"
import invitationIcon from '../assets/invitationIcon1.png'
import eventsIcon from '../assets/EventsIcon1.png'

export function PanelCard() {
    return(
        <div className="cards-container">
            <Link to="/create-invitation">
                <div className="card-box">
                    <img  className="img-card" src={invitationIcon} alt="Crear invitación" />
                    <h2>Crear invitación</h2>
                    <p>Crea eventos personalizados y compartilos con tus invitados mediante un enlace único.</p>
                </div>
            </Link>

            <Link to="/events">
                <div className="card-box">
                    <img className="img-card" src={eventsIcon} alt="Mis eventos" />
                    <h2>Mis eventos</h2>
                    <p>Consulta todas tus invitaciones creadas y administra cada evento fácilmente.</p>
                </div>
            </Link>
        </div>
    )
}
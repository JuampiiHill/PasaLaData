import { Link } from 'react-router-dom';


function Events() {

    const sampleEvents = [
        {
            id: 1,
            name: "Cumpleaños de Juan",
            description: "Fiesta en casa, trae lo que quieras",
            confirmations: 12
        },
        {
            id: 2,
            name: "Asado el domingo",
            description: "Reunión familiar",
            confirmations: 8
        }            
    ];
    return (
        <div className='events-page'>
            <h1 className='panel-title'>Eventos disponibles</h1>
            <p className='events-subtitle'>
                Gestipná tus eventos, revisá el estado y accede a cada uno.
            </p>

            <div className='events-grid'>
                {sampleEvents.map(event => (
                    <Link key={event.name} to={`/events/${event.id}`} className='event-card'>
                        <h2>{event.name}</h2>
                        <p className='event-description'>{event.description}</p>
                        <p className='event-confirms'><strong>Confirmaciones: {event.confirmations}</strong></p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Events;
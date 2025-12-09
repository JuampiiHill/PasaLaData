import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateInvitation = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Evento creado correctamente");

        navigate("/events")
    }

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [notes, setNotes] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="create-invitation-container">
        <h1>Crear Invitación</h1>

        <form className="invitation-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre del evento</label>

                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
            <label>Fecha</label>
            <input 
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            </div>

            <div className="form-group time-group">
            <div>
                <label>Hora inicio</label>
                <input 
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                />
            </div>

            <div>
                <label>Hora fin</label>
                <input 
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                />
            </div>
            </div>

            <div className="form-group">
            <label>Observaciones</label>
            <textarea 
                placeholder="Ej: Traer bebida, venir con ropa cómoda..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label>Ubicación</label>
            <input 
                type="text"
                placeholder="Ingresar dirección o link de Google Maps"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            </div>

            <button type="submit" className="create-btn">
            Crear invitación
            </button>

            <button type="button" className="share-btn">
            Compartir invitación
            </button>
        </form>
        </div>
    );
};

export default CreateInvitation;
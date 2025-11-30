import { PanelCard } from "../components/PanelCard";

function Panel() {
    return(
        <div className="panel-wrapper">
            <h1 className="panel-title">Panel de control</h1>
            <p className="panel-subtitle">Gestioná todo de forma simple y rápida</p>
            <div>
                <PanelCard />
            </div>
        </div>
    );
}

export default Panel;
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from './pages/Register'
import Login from './pages/Login'
import Panel from "./pages/Panel"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import Events from "./pages/Events"


export function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/panel" element={<Panel />}></Route>
                <Route path="/events" element={<Events />}></Route>
            </Routes>
            <Footer />
        </>
    );
}
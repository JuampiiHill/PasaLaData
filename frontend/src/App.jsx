import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from './pages/Register'
import Login from './pages/Login'
import Panel from "./pages/Panel"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import Events from "./pages/Events"
import CreateInvitation from "./pages/CreateInvitation"


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
                <Route path="/create-invitation" element={<CreateInvitation />}></Route>
            </Routes>
            <ToastContainer
            position="top-center" 
            autoClose={2500}
            theme="colored"
            />
            <Footer />
        </>
    );
}
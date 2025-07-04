import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return <nav id="Navbar">
        <ul id="Navbar-list">
            <li><NavLink className="Navbar-link" to="/home">Home</NavLink></li>
            <li><NavLink className="Navbar-link" to="/projects">My Projects</NavLink></li>
            <li><NavLink className="Navbar-link" to="/contact">Contact</NavLink></li>
        </ul>
        <hr className="Navbar-divider" />
    </nav>;
}

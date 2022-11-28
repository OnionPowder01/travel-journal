import React from "react";
import earth from '../images/Earth.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={earth} alt="earth-logo" className="earth-logo" />
            <h4 className="nav-text">my travel journal</h4>
        </nav>
    )
}
import React from "react";
import "./navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar;
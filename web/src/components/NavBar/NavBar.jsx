import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="link-nav" to={"/"}>SHOP BIKES</Link>
            </div>
        </nav>
    )
}

export default NavBar
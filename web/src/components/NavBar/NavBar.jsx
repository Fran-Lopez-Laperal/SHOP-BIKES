import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="logo-letters link-nav" to={"/products"}>
                    <span className='shop-letters' style={{ color: 'red' }}>SHOP</span>
                    <strong className='logo-line'>-</strong>
                    <span className='bikes-letters' style={{ color: 'white' }}>BIKES</span></Link>
            </div>
        </nav>
    )
}

export default NavBar
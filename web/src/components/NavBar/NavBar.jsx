import './NavBar.css'
import React from "react";



function NavBar() {
    return (
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h5 className="navbar-brand">Navbar</h5>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
}

export default NavBar
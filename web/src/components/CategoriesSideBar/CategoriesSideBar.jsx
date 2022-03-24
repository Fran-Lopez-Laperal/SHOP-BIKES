import React from "react";
import { Link } from "react-router-dom";


import './CategoriesSideBar.css'
function CategoriesSideBar() {


    return (
        <ul className="side-bar unstylled-list">
            <li className="side-text ">
                <Link to="/products?category=bike">
                    <i className="icon me-2 fa fa-bicycle"></i>
                    Bicicletas
                </Link>
            </li>

            <li className="side-text">
                <Link  to="/products?category=electronic">
                    <i className="icon me-2 fa fa-bluetooth-b" aria-hidden="true"></i>
                    Eléctronica
                </Link>
            </li>

            <li className="side-text">
                <Link to="/products?category=components">
                    <i className="icon me-2 fa fa-steam"></i>
                    Componentes
                </Link>
            </li>

            <li className="side-text">
                <Link to="/products?category=clothes">
                <i className="icon me-2 fa fa-shopping-cart"></i>
                    Ropa
                </Link>
            </li>

        </ul>
    )
}

export default CategoriesSideBar
import React from "react";
import { Link } from "react-router-dom";



import './CategoriesSideBar.css'
function CategoriesSideBar() {


    return (

        <div>

            <ul className="side-bar unstylled-list pt-5">
                <Link to="/products?category=bike">
                    <li className="side-text mb-2">
                        <i className="icon me-2 fa fa-bicycle fa-fw"></i>
                        Bicicletas
                    </li>
                </Link>
                <Link to="/products?category=electronic">
                    <li className="side-text mb-2">
                        <i className="icon me-2 fa fa-bluetooth-b fa-fw" aria-hidden="true"></i>
                        Eléctronica
                    </li>
                </Link>

                <Link to="/products?category=components">
                    <li className="side-text mb-2">
                        <i className="icon me-2 fa fa-steam fa-fw"></i>
                        Componentes
                    </li>
                </Link>

                <Link className="success" to="/products?category=clothes">
                    <li className="side-text mb-2">
                        <i className="icon me-2 fa fa-shopping-cart fa-fw"></i>
                        Ropa
                    </li>
                </Link>

            </ul>
           

        </div>

    )
}

export default CategoriesSideBar




import React from "react";
import CategoriesSideBar from "../../components/CategoriesSideBar/CategoriesSideBar";
import ProductList from "../../components/ProductList/ProductList";
import './Products.css'


function Products() {

    return (
        <div className="d-flex">

            <div className="side-bar-products">
                <CategoriesSideBar />
            </div>

            <div className="side-products">
                <ProductList />
            </div>

        </div>
    )
}

export default Products
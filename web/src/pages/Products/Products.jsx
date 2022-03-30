import React from "react";
import CategoriesSideBar from "../../components/CategoriesSideBar/CategoriesSideBar";
import ProductList from "../../components/ProductList/ProductList";
import './Products.css'


function Products() {

    return (
        <div className="products d-flex ms-2">

            <div className="side-bar-products me-2">
                <CategoriesSideBar />
            </div>

            <div className="side-products">
                <ProductList />
            </div>

        </div>
    )
}

export default Products
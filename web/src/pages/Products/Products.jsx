import React from "react";
import CategoriesSideBar from "../../components/CategoriesSideBar/CategoriesSideBar";
import LastProducts from "../../components/LastProducts/LastProducts";
import ProductList from "../../components/ProductList/ProductList";
import './Products.css'


function Products() {

    return (
        <div className="products d-flex ms-2">

            <div className="side-bar-products">
                <CategoriesSideBar />
                <div className="last-products">
                    <LastProducts />
                </div>
            </div>

            <div className="side-products align-items-center">
                <ProductList />
            </div>

        </div>
    )
}

export default Products
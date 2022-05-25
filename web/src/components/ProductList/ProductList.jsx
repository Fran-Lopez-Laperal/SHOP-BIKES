

import './PorductList.css'
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getProducts } from "../../services/api-service";
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setProducts] = useState(undefined)
    const { search } = useLocation()

    useEffect(() => {

        const url = new URLSearchParams(search)
        const category = url.get("category")
        const name = url.get("name")

        getProducts(category, name)
            .then((products) => {
                setProducts(products)
            })
    }, [search])

    if (!products) {
        return null
    }

    return (
        <>
            <hr />
            <div className='item-body row justify-content-center'>
                {products.map(product => (

                    <div className="card shadow mt-1 mb-2 ms-2" style={{ width: '16rem' }} key={product.id}>
                        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                            <div className='inner'>
                                <img src={product.image} className="card-img-top mt-2 p-1" alt={product.name} />
                            </div>
                        </Link>
                        <hr />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <div className='card-price'>
                                <small>{product.price}€</small>
                            </div>
                            <p style={{ color: 'grey' }}>M L XL</p>
                        </div>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default ProductList
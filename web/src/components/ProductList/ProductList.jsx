
   
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
        <div className='item-body  col-2' >
            {products.map(product => (

                <div className="card shadow p-1 mt-5 ms-4 mb-5" style={{ width: '16rem' }} key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <div className='inner'>
                            <img src={product.image} className="card-img-top mt-2 p-3" alt={product.name} />
                        </div>
                    </Link>
                    <hr />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <small>{product.price}€</small>
                        <div>
                            <small style={{ color: 'grey' }}>M L XL</small>
                        </div>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default ProductList
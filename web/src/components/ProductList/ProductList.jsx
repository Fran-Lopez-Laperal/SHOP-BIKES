import './PorductList.css'
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getProducts } from "../../services/api";
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setProducts] = useState(undefined)
    const { search } = useLocation()

    useEffect(() => {

        const url = new URLSearchParams(search)
        const category = url.get("category")
        const name = url.get("search")

        getProducts(category, name)
            .then((products) => {
                setProducts(products)
            })
    }, [search])

    if (!products) {
        return null
    }

    

    return (
        <div className='item-body d-flex row' >
            {products.map(product => (

                <div className="card mt-5 me-4 mb-5" style={{ width: '16rem' }} key={products.id}>
                    <Link to='/'>
                        <img src={product.image} className="card-img-top mt-2 p-3" alt={product.name} />
                    </Link>
                    <hr/>
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
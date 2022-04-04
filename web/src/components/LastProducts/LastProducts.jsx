import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../services/api-service"
import './LastProduct.css'


function LastProducts() {

    const [products, setProducts] = useState(undefined)

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products.reverse().slice(0, 5))
        })
    }, [])

    if (!products) {
        return null
    }


    return (
        <div className="last-product">
            <h4>Novedades</h4>
            {products.map(product =>

                <Link to={`/products/${product.id}`} key={`${product.id}-last`}>
                    <div className="last-product-card rounded-3 border mt-4 p-2 text-center">
                        <h5>{product.name}</h5>
                        <img src={product.image} alt={product.name} />
                    </div>
                </Link>
            )}
        </div>
    )
}

export default LastProducts
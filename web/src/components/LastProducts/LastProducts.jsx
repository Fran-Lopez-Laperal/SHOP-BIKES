import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../../services/api-service"
import './LastProduct.css'
// const lastProducts = products.sort(function(a,b){
//         return new Date(b.date) - new Date(a.date)
//     })

function LastProducts() {

    const [products, setProducts] = useState(undefined)

    useEffect(() => {
        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    if (!products) {
        return null
    }


    const lastProducts = products.slice(0, 3)
    console.log(lastProducts)




    return (


        <div className="last-product">
        <h4>Novedades</h4>
            {products.slice(0, 5).map(product =>
            <Link to={`/products/${product.id}`}>
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
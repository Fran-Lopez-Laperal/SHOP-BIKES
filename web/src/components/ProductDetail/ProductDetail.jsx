import './ProductDetail.css'
import React from "react";
import { useParams } from "react-router";
import { getDetailProduct } from "../API-services/API-services";

function ProductDetail() {

    const [product, setProduct] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        getDetailProduct(id).then((response) => {
            setProduct(response.data)
        })
    }, [])

    if (!product) {
        return null;
    }


    return (
        <div className="d-flex ">
            <div className="col-md-4 mt-5 product-image">
                <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
            </div>

            <div className="cart">
                <div>
                    <h3>{product.name}</h3>
                    <small>{product.description}</small>
                    <h5>{product.price}</h5>
                </div>

                <button className='btn btn-danger'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetail









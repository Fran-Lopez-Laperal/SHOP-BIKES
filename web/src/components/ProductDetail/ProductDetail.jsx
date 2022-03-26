import './ProductDetail.css'
import React from "react";
import { useParams } from "react-router";
import { getDetailProduct } from "../../services/api-service";

function ProductDetail() {

    const [product, setProduct] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        getDetailProduct(id).then((product) => {
            setProduct(product)
        })
    }, [id])

    if (!product) {
        return null;
    }
    function handleAdd() {
        
    }


    return (
        <>
            <hr />
            <div className="card mb-5" style={{ maxWidth: '840px' }}>
                <div className="row g-0">
                    <div className="product-image col-md-6">
                        <img src={product.image} className="img-fluid rounded-start" alt={product.id} />
                    </div>
                    <div className="product-detail col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <hr />
                            <p className='product-price card-text' style={{ color: 'red' }}>{product.price}€</p>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><strong>Category: </strong><small className="text-muted">{product.category}</small></p>
                            <button className='btn' onClick={handleAdd}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </>

    )
}

export default ProductDetail


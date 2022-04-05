import './ProductDetail.css'
import React from "react";
import { useNavigate, useParams } from "react-router";
import { addProductToCart, getDetailProduct, deleteProduct } from "../../services/api-service";
import { AuthContext } from '../../contexts/AuthContext';


function ProductDetail() {

    const [product, setProduct] = React.useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const { user } = React.useContext(AuthContext)


    React.useEffect(() => {
        getDetailProduct(id).then((product) => {
            setProduct(product)
        })
    }, [id])

    if (!product) {
        return null;
    }
    const handleAdd = () => {
        addProductToCart(id).then(() => {
            navigate('/products')
        })
    }

    function handleDelete() {
        deleteProduct(product.id).then(() => {
            navigate('/')
        })
    }


    return (
        <>
            <hr />
            <div className='card-div'>
                <div className=" card mb-5 mt-5" style={{ maxWidth: '840px' }}>
                    <div className="row g-0">
                        <div className="product-image col-md-6">
                            <img src={product.image} className="img-fluid rounded-start mt-5" alt={product.id} />
                        </div>
                        <div className="product-detail col-md-6">
                            <div className="card-body">
                                <div className='delete-button'>
                                    {(user.role === 'admin') && (
                                        <button className='btn btn-danger' onClick={handleDelete}><i className='fa fa-trash'></i></button>
                                    )}
                                </div>
                                <h5 className="card-title">{product.name}</h5>
                                <hr />
                                <p className='product-price card-text' style={{ color: 'red' }}>{product.price}€</p>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>Category: </strong><small className="text-muted">{product.category}</small></p>
                                <button className='btn btn-success' onClick={handleAdd}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default ProductDetail


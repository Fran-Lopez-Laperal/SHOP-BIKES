import { useEffect, useState } from "react"
import { getCart, addOrder } from "../../services/api-service"
import moment from "moment"
import './ShoppingCart.css'
import { Link, useNavigate } from "react-router-dom"

function ShoppingCart() {

    const navigate = useNavigate()
    const [cart, setCart] = useState(undefined)
    // const [product, setProduct] = useState(undefined)


    useEffect(() => {
        getCart().then((cart) => {
            setCart(cart)
        })
    }, [])

    if (!cart) {
        return null
    }

    // function handleDelete() {
    //     deleteProduct(product.id).then(() => {
    //         navigate('/shopping-cart')
    //     })
    // }


    function handleOrder(order) {
        addOrder(order).then(() => {
            navigate('')
        })
    }

    return (
        <div className="shopping-cart d-flex flex-column mb-5">
            <Link to="/products" className="btn cart-button success col-2 mt-5">Seguir comprando</Link>
            <h4 className="cart-head mt-5">
                <strong>Descripción del artículo</strong>
            </h4>
            <hr />

            <div className="mb-5">
                {cart.products.map(cart => (

                    <div className="cart mt-3 p-4 rounded-3 border" key={cart.product.id}>

                        <div className="d-flex flex-row cart-info">


                            <img className="cart-image" src={cart.product.image} alt={cart.product.name} />


                            <div className="ms-5 cart-info flex-grow-1">
                                <h4>{cart.product.name}</h4>
                                <small className="moment">
                                    Fecha de entrega estimada: <strong className="ms-3">{moment().add(6, 'days').calendar()}</strong>
                                </small>
                            </div>

                            <div className="cart-price ">
                                <small style={{ color: 'red' }}>{cart.product.price}€</small>
                            </div>

                        </div>
                        {/* <div className="d-flex justify-content-end">
                            <button className="d-flex justify-content-center delete-btn btn btn-danger" onClick={handleDelete}><i className="fa fa-trash"></i></button>
                        </div> */}

                    </div>


                ))}

                <hr />

                <div className="bg-light d-flex flex-row align-items-center rounded-3 p-3">
                    <div className="flex-grow-1 ">
                        <small className="ms-5">IVA incl.</small>
                    </div>
                    <small className="p-5">Total compra</small>
                    <small className="px-2" style={{ color: 'black' }}>{cart.total}€</small>
                </div>
                
                <div className="d-flex align-self-end mt-4 mb-4 justify-content-end rounded-3">
                    <Link to='/shopping-cart/order' className="btn btn-danger">
                        <i className="fa fa-shopping-cart me-3" onClick={handleOrder()}></i> Realizar pedido
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCart 
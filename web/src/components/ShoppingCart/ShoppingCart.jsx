import { useEffect, useState } from "react"
import { getCart } from "../../services/api-service"
import moment from "moment"
import './ShoppingCart.css'
import { Link } from "react-router-dom"

function ShoppingCart() {


    const [cart, setCart] = useState(undefined)


    useEffect(() => {
        getCart().then((cart) => {
            console.log(cart)
            setCart(cart)
        })
    }, [])

    if (!cart) {
        return null
    }



    return (
        <div className="shopping-cart d-flex flex-column">
            <thead className="cart-head">
                <strong>Descripción del artículo</strong>
            </thead>
            <hr />


            {cart.products.map(cart => (

                <div className="cart" key={cart.product.id}>

                    <div className="d-flex flex-row cart-info">


                        <img className="cart-image" src={cart.product.image} alt={cart.product.name} />


                        <div className="ms-5 cart-info flex-grow-1">
                            <h4>{cart.product.name}</h4>
                            <small className="moment">
                                {moment().format('MMMM Do YYYY')}
                            </small>
                        </div>

                        <div className="cart-price ">
                            <small style={{ color: 'red' }}>{cart.product.price}€</small>
                        </div>

                    </div>
                </div>


            ))}
            <hr />

            <div className="bg-light d-flex flex-row align-items-center">
                <div className="flex-grow-1 ">
                    <small className="ms-5">IVA incl.</small>
                </div>
               
                <small className="p-5">Total compra</small>
                    <small className="px-2" style={{ color: 'black' }}>{cart.total}€</small>
               
            </div>

            <div className="d-flex cart-button align-self-end mt-4 mb-4">

                <Link className="ms-auto btn bg-light" to='/products'></Link>

                <Link to='/shopping-cart/order' className="btn btn-danger ">
                    <i className="fa fa-shopping-cart"></i> Realizar pedido
                </Link>
            </div>
        </div>
    )
}

export default ShoppingCart
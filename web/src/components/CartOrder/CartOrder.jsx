import React, { useEffect } from "react"
import { getOrder } from "../../services/api-service"
import { AuthContext } from '../../contexts/AuthContext';
import './CartOrder.css'

function CartOrder() {

    const [orders, setOrders] = React.useState(null)
    const { user } = React.useContext(AuthContext)

    useEffect(() => {
        getOrder().then((orders) => {
            setOrders(orders)
        })
    }, [])

    if (!orders) {
        return null
    }

    return (
        <div className="d-flex mt-5 mb-5">
            <div className="info-order-cart" >
                <div className="info-order-user p-5 border rounded-3 mb-3 d-flex flex-column" id="group">
                    <h5 className="mb-5">
                        <i className="fa fa-user-o me-3" aria-hidden="true"></i>
                        Datos de contacto y envío
                        <i className="fa fa-check-circle-o ms-3" aria-hidden="true"></i>
                    </h5>
                    <h6>{user.name}</h6>
                    <small className="user-adress">{user.adress.slice(0, 12)}</small>
                    <small className="user-adress">{user.adress.slice(12, 50)}</small>
                    <div className="d-flex mt-5">
                        <input type="checkbox" name="check" id="check" />
                        <h6 className="user-adress ms-1">Los datos de facturación y de envío son los mismos</h6>
                    </div>
                </div>

                <div className="p-5 rounded-3 mb-3 d-flex flex-column" id="group">
                    <h5><i className="fa fa-truck me-3 mb-5" aria-hidden="true"></i>Método de envío</h5>
                    <div>
                        <input className="mb-5" type="radio" name="post" />
                    </div>
                    <div>
                        <input type="radio" name="post" />
                    </div>
                </div>

                <div className="p-5 rounded-3" id="group">
                    <h5>Método de pago</h5>
                    <div>
                    </div>
                </div>
            </div>

            <div className=" p-5 ms-5 rounded-3" id="group">
                <h1>Resumen del pedido</h1>
                {orders.map(order =>
                    order.products.map(product => (
                        <div>
                            <div>
                                <div>
                                    {product.price}
                                </div>
                                <div>
                                    {product.amount}
                                </div>
                            </div>
                        </div>



                    ))
                )}
            </div>


        </div>
    )
}

export default CartOrder


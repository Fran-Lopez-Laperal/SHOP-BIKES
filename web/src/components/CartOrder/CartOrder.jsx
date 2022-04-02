import React, { useEffect } from "react"
import { getOrder, getProducts } from "../../services/api-service"
import { AuthContext } from '../../contexts/AuthContext';
import './CartOrder.css'
import img1 from '../../assets/pay-images/gls.png'
import img2 from '../../assets/pay-images/mondial-relay.png'
import img3 from '../../assets/pay-images/adyen_hpp_v4.png'
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";
const number = '4323 2344 2344 2343'

function CartOrder() {

    const [loading, setLoading] = React.useState(false)
    const [orders, setOrders] = React.useState(null)
    const [products, setProducts] = React.useState(undefined)
    const navigate = useNavigate()

    const { user } = React.useContext(AuthContext)


    useEffect(() => {
        getOrder().then((orders) => {
            setOrders(orders)
        })

        getProducts().then((products) => {
            setProducts(products)
        })
    }, [])

    console.log(products)

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            // todo: here
            navigate('/pay')
            setLoading(false)
        }, 5000);
    }

    console.log(orders)
    if (!orders) {
        return false
    }

    if (loading) {
        return <Loading />
    }



    return (
        <>

            <div className="d-flex mt-5 mb-5">
                <div className="info-user-order w-75" >
                    <div className="info-order-user p-5 border rounded-3 mb-3 d-flex flex-column" id="group">
                        <h5 className="mb-5">
                            <i className="fa fa-user-o me-3" aria-hidden="true"></i>
                            Datos de contacto y envío
                            <i className="fa fa-check-circle-o ms-3" aria-hidden="true"></i>
                        </h5>
                        <h6>{user.name}</h6>
                        <small className="user-adress">{user.adress.slice(0, 12)}</small>
                        <small className="user-adress">{user.adress.slice(12, 50)}</small>
                        <div className="d-flex align-items-center mt-5">
                            <input type="checkbox" name="check" id="check" />
                            <h6 className="user-adress ms-1">Los datos de facturación y de envío son los mismos</h6>
                        </div>
                    </div>

                    <div className="p-5 rounded-3 mb-3 d-flex flex-column border" id="group">

                        <h5><i className="fa fa-truck me-3 mb-5" aria-hidden="true"></i>Método de envío</h5>

                        <div className="delivery d-flex">
                            <div className="delivery-gls d-flex align-self-center">
                                <input type="radio" name="post" />
                                <img className="img1-order" src={img1} alt="" />
                            </div>
                            <div className="d-flex flex-column mt-1 ms-5">
                                <h6>Entrega a domicilio 24 horas GLS</h6>
                                <p>Recibirás tu pedido el lunes 4 Abril 2022</p>
                            </div>
                        </div>

                        <hr />

                        <div className="delivery d-flex p-1">
                            <div className="delivery-mondial align-self-center d-flex" >
                                <input className="align-self-center" type="radio" name="post" />
                                <img src={img2} alt="" />
                            </div>
                            <div className="d-flex flex-column mt-1 ms-5">
                                <h6>Punto de recogida Mondial Relay</h6>
                                <p>Recibirás tu pedido en el punto de recogida el miércoles 6 Abril 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="order-credit-card p-5 rounded-3 border" id="group">
                        <h5 className="mb-5">
                            <i class="fa fa-credit-card-alt me-3" aria-hidden="true"></i>
                            Método de pago
                            <i className="fa fa-check-circle-o ms-3" aria-hidden="true"></i>
                        </h5>
                        <h6>Tarjeta de crédito</h6>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                        <div className="mb-5 mt-3">
                            <small>Esta forma de pago es inmediata y totalmente segura. </small>
                        </div>

                        <div>
                            <div className='credit-card w-100 d-flex flex-column rounded rounded-3 p-3 mt-4'>


                                <img className="align-self-end mb-3" src={img1} alt={img1}></img>

                                <h4 className='m-0 align-self-center my-1'>•••• •••• •••• {number.slice(-4)}</h4>
                                <div className='d-flex credit-card-expires'>
                                    <small className='me-3'>Expires {'02'} {'/'} {'28'}</small>
                                    <small>Abanca</small>
                                </div>

                                <small className=''>{user.name}</small>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart-order p-5 ms-5 rounded-3 w-50 border" id="group">
                    <h5 className="mb-5"><i className="fa fa-cart-arrow-down me-3" aria-hidden="true"></i>
                        Resumen del pedido
                    </h5>
                    {orders.map(order =>
                        <div className="">
                            <div className="cart-order-total d-flex justify-content-between">
                                <small className="w-75">Subtotal</small>
                                <p className="">{order.total} €</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <small className="w-75">Gastos de envío</small>
                                <h6 className="">Gratis</h6>
                            </div>

                            <div className=" d-flex justify-content-between border-2 rounded-3 align-self-center" id="cart-order" >
                                <h5 className="fw-bold w-75 mt-1">Total</h5>
                                <h5 className="fw-bold mt-1">{order.total} €</h5>
                            </div>
                            <div>
                                {loading ? (
                                    <Loading />
                                )
                                    :
                                    <button className="btn btn-danger grid mt-3 col-12" onClick={() => handleLoading()}>
                                        <i className="fa fa-cart-arrow-down me-5" aria-hidden="true"></i>
                                        Realizar pedido
                                    </button>
                                }



                            </div>

                        </div>

                    )}
                    <hr />
                    <p className="fw-light"><i className="fa fa-shopping-cart me-3" aria-hidden="true"></i>
                        Mis productos
                    </p>
                    {orders.map(order =>
                        order.products.map(product => {
                            console.log(product)
                            const fullProduct = products?.find(p => p.id === product.product)
                            return (
                                <div className="info-resume d-flex justify-content-between" key={product.id}>
                                    <div className="d-flex  align-self-center">
                                        <img src={fullProduct?.image} alt="" />
                                    </div>
                                    <div className="d-flex  align-self-center ">
                                        <div className="info-resume-amount">
                                            {product.amount}x
                                        </div>
                                        <div className="">
                                            {fullProduct?.name}
                                        </div>
                                    </div>

                                    <div className="d-flex  align-self-center">
                                        <h5 className="fw-light">{product.price}€</h5>
                                    </div>

                                </div>
                            )
                        })

                    )}
                    <hr />
                    
                </div>

            </div>
        </>
    );

}

export default CartOrder

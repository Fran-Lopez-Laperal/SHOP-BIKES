import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { getOrder } from '../../services/api-service'
import './Pay.css'
import moment from "moment"


function Pay() {

    const [orders, setOrders] = React.useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getOrder().then((orders) => {
            setOrders(orders)
        })
    }, [])

    if (!orders) {
        return null
    }

    return (
        <div className='pay mt-5 mb-5 d-flex flex-column align-items-center p-5'>
            <h5 className='mt-5 mb-5 text-danger'><i className='fa fa-shopping-cart'></i> COMPRA REALIZADA CON ÉXITO</h5>
            {orders.map(order =>
                <div key={order.id} className='pay-info ms-5'>
                    <div className='pay-size d-flex justify-content-between'>
                        <h4>Datos de envío</h4>
                        <div className='pay-size px-5 d-flex flex-column text-end'>
                            <h3 className='fw-light'>{user.name}</h3>
                            <h3 className='fw-light'>{user.adress}</h3>
                        </div>
                    </div>

                    <hr />
                    <div className='info-process d-flex align-items-center justify-content-between pay-size'>
                        <h4>Estado del pedido</h4>
                        <h3 className='px-5 fw-light'>{order.state}</h3>
                    </div>
                    <hr />
                    <div className='d-flex align-items-center justify-content-between pay-size'>
                        <h4>Estado y fecha estimada de llegada</h4>
                        <div className='px-5 text-end pay-size'>
                            <h1 className='fw-light'>{moment().add(6, 'days').calendar()}</h1>
                            <h1 className='fw-light'>{order.total}  €</h1>
                        </div>

                    </div>

                </div>

            )}
        </div>
    )
}

export default Pay
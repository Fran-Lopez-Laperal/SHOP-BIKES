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
        <div className='pay mt-5 mb-5 d-flex align-items-center'>
            {orders.map(order =>
                <div className='pay-info ms-5'>
                    <div className='d-flex justify-content-between'>
                        <h1>Datos de envío</h1>
                        <div className='px-5 d-flex flex-column text-end'>
                            <h3 className='fw-light'>{user.name}</h3>
                            <h3 className='fw-light'>{user.adress}</h3>
                        </div>
                    </div>

                    <hr />
                    <div className='d-flex align-items-center justify-content-between'>
                        <h1>Estado del pedido</h1>
                        <h3 className='px-5'>{order.state}</h3>
                    </div>
                    <hr />
                    <div>
                    <h5>Estado y fecha estimada de llegada</h5>
                    <h1>{moment().add(6, 'days').calendar()}</h1>
                    <h1>{order.total}  €</h1>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default Pay
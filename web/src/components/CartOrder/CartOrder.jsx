import React, { useEffect } from "react"
import { getOrder } from "../../services/api-service"

function CartOrder() {

    const [orders, setOrders] = React.useState(null)

    useEffect(() => {
        getOrder().then((orders) => {
            setOrders(orders)
        })
    }, [])

    if (!orders) {
        return null
    }

    return (
        <div>
            {orders.map(order =>       
                order.products.map(product => (
                    <div>
                        <div>
                            {product.product}
                        </div>
                        <div>
                            {product.price}
                        </div>
                        <div>
                            {product.amount}
                        </div>
                    </div>


                ))
            )}
        </div>
    )
}

export default CartOrder


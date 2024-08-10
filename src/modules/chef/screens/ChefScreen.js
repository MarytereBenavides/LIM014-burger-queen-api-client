import React, { useEffect, useState } from 'react'
import { getOrder } from '../../../services/orderService';
import Card from '../components/card'

const ChefScreen = () => {
    const [ordersKitchen, setOrdersKitchen] = useState([]);

    useEffect(() => {

        getOrder()
            .then((resp) => {
                console.log('hola', resp)
                return setOrdersKitchen(resp);
            })
        // return () => {

        // }

    }, [])

    const ordersPending = ordersKitchen.filter((e) => {
        return e.status === 'pending';
    })
    const reverseViewOrder = ordersPending.reverse();

    return (
        <div className='multiplesBoletas'>
            {reverseViewOrder.map((order) => (
                <Card
                    key={order._id}
                    order={order}
                    ordersKitchen={ordersKitchen}
                    setOrdersKitchen={setOrdersKitchen}

                />
            ))}
        </div>
    )
}

export default ChefScreen;
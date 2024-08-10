import React, { useEffect, useState, useContext } from 'react'
import { getOrder } from '../../../services/orderService';
import AuthContex from '../../auth/context/authContext'

import Card from '../components/card'
const WaiterScreen = () => {
    const [ordersKitchen, setOrdersKitchen] = useState([]);
    const { usuId } = useContext(AuthContex);

    useEffect(() => {
        getOrder()
            .then((resp) => {
                console.log('hola', resp)
                return setOrdersKitchen(resp);
            })
        // return () => {

        // }

    }, [])



    const ordersDelivering = ordersKitchen.filter((e) => {
        return (e.status === 'delivering' && e.userId === usuId);
    })
    const reverseViewOrder = ordersDelivering.reverse();

    //     const handleDelivering = (e) =>{
    //         const idClicked = e.target.id
    //        console.log(idClicked)
    //        const oneOrder = ordersDelivering.filter((e)=>{ return e._id === idClicked });
    //        let body = {};
    //        oneOrder.map((e) => {
    //            return (
    //                body={
    //                    status: 'delivered',
    //                    userId: e.userId,
    //                    client: e.client,
    //                    products:e.products,
    //                    dateEntry: e.dateEntry,
    //                    dateProcessed: e.dateProcessed
    //                });
    //        });
    //        const updateOrders = ordersDelivering.filter((e) =>{return e._id !== idClicked
    //     });
    //     setOrdersKitchen(updateOrders)

    //  console.log('estoy aqui')
    //  putOrder(body,idClicked);
    //     }

    //     const handleCancel = (e) =>{
    //         const idClicked = e.target.id
    //        console.log(idClicked)
    //        const oneOrder = ordersDelivering.filter((e)=>{ return e._id === idClicked });
    //        let body = {};
    //        oneOrder.map((e) => {
    //            return (
    //                body={
    //                });
    //        });
    //        const updateOrders = ordersDelivering.filter((e) =>{return e._id !== idClicked
    //     });
    //     setOrdersKitchen(updateOrders)

    //  console.log('estoy aqui')
    //   deleteOrder(body,idClicked);
    //     }

    return (
        <div className='multiplesBoletas'>
            {reverseViewOrder.map((order) => (
                <Card
                    key={order._id}
                    order={order}
                    ordersKitchen={ordersKitchen}
                    setOrdersKitchen={setOrdersKitchen}

                />
                //  <div key={order._id} id={order._id} >
                //      <section>
                //      <h3>{order.client}</h3>
                //      <span>{(new Date(order.dateEntry).toLocaleString()).slice(9,14)}</span>
                //      </section>
                //      <section>
                //      <h3>Order Detail</h3>
                //      <span>time run</span>
                //      </section>
                //      <section>
                //      <p>{(order.products).map((order)=>(
                //      <div>
                //      <p>{order.product.name}</p> 
                //      <span>{order.qty}</span>
                //      </div>))}
                //      </p>
                //      </section>
                //      <section>
                //      <button id={order._id} onClick={handleCancel} >
                //          CANCEL
                //      </button>
                //      <button id={order._id} onClick={handleDelivered}  >
                //          DONE
                //      </button>
                //      </section>
                //      <section>
                //          {order.userId}
                //      </section>
                // </div> 
            ))}
        </div>
    )
}

export default WaiterScreen;
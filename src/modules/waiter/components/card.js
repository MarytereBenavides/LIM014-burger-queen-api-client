import React, { useContext } from 'react'
import { deleteOrder, putOrder } from "../../../services/orderService";
import AuthContex from '../../auth/context/authContext'


export default function Card({ order, ordersKitchen, setOrdersKitchen }) {
    const { usuId } = useContext(AuthContex);

    const ordersDelivering = ordersKitchen.filter((e) => {
        return (e.status === 'delivering' && e.userId === usuId);
    })

    const handleDelivered = (e) => {
        const idClicked = e.target.id
        console.log(idClicked)
        const oneOrder = ordersDelivering.filter((e) => { return e._id === idClicked });
        let body = {};
        oneOrder.map((e) => {
            return (
                body = {
                    status: 'delivered',
                    userId: e.userId,
                    client: e.client,
                    products: e.products,
                    dateEntry: e.dateEntry,
                    dateProcessed: e.dateProcessed
                });
        });
        const updateOrders = ordersDelivering.filter((e) => {
            return e._id !== idClicked
        });
        setOrdersKitchen(updateOrders)

        console.log('estoy aqui')
        putOrder('delivered', idClicked);
    }

    const handleCancel = (e) => {
        const idClicked = e.target.id
        console.log(idClicked)
        const oneOrder = ordersDelivering.filter((e) => { return e._id === idClicked });
        let body = {};
        oneOrder.map((e) => {
            return (
                body = {
                });
        });
        const updateOrders = ordersDelivering.filter((e) => {
            return e._id !== idClicked
        });
        setOrdersKitchen(updateOrders)

        console.log('estoy aqui')
        deleteOrder(idClicked);
    }


    return (
        <div className="boletapedido">
            {order && <div key={order._id} id={order._id} >
                <section>
                    <h3>{order.client}</h3>
                    <span>{order.dateEntry.toDate().toLocaleString()}</span>
                </section>
                <section className="orderVoucher">
                    <h3>Order Detail</h3>
                    {/* <span>time run</span> */}
                </section>
                <section >
                    <p>{(order.products).map((order) => (
                        <div className="detailProduct">
                            <span>{order.qty}</span>
                            <p>{order.name}</p>
                        </div>))}
                    </p>
                </section>
                <section className="buttonSection">
                    <button id={order._id} onClick={handleCancel} className='buttonAdd form-btnLogin ' >
                        CANCEL
                    </button>
                    <button id={order._id} onClick={handleDelivered} className='buttonAdd form-btnLogin ' >
                        DONE
                    </button>
                </section>
                {/* <section>
    {order.userId}
</section> */}
            </div>}
        </div>
    )
}
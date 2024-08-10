import { deleteOrder, putOrder } from "../../../services/orderService";


export default function Card({ order, ordersKitchen, setOrdersKitchen }) {

    const ordersPending = ordersKitchen.filter((e) => {
        return e.status === 'pending';
    })

    const handleDelivering = (e) => {
        const idClicked = e.target.id
        console.log(idClicked)
        const oneOrder = ordersPending.filter((e) => { return e._id === idClicked });
        let body = {};
        oneOrder.map((e) => {
            return (
                body = {
                    status: 'delivering',
                    userId: e.userId,
                    client: e.client,
                    products: e.products,
                    dateEntry: e.dateEntry,
                    // dateProcessed: e.dateProcessed
                });
        });
        const updateOrders = ordersPending.filter((e) => {
            return e._id !== idClicked
        });
        setOrdersKitchen(updateOrders)

        console.log('estoy aqui')

        putOrder("delivering", idClicked);
    }

    const handleCancel = (e) => {
        const idClicked = e.target.id
        console.log(idClicked)
        const oneOrder = ordersPending.filter((e) => { return e._id === idClicked });
        let body = {};
        oneOrder.map((e) => {
            return (
                body = {
                });
        });
        const updateOrders = ordersPending.filter((e) => {
            return e._id !== idClicked
        });
        setOrdersKitchen(updateOrders)

        console.log('estoy aqui')
        deleteOrder(idClicked);
    }


    return (
        <div key={order._id} id={order._id} className="boletapedido">
            <section>
                <h3>{order.client}</h3>
                <span>{order.dateEntry.toDate().toLocaleString()}</span>
            </section>
            <section className="orderVoucher">
                <h3>Order Detail</h3>
                {/* <span>time run</span> */}
            </section>
            <section>
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
                <button id={order._id} onClick={handleDelivering} className='buttonAdd form-btnLogin '>
                    DONE
                </button>
            </section>
            {/* <section>
                {order.userId}
            </section> */}
        </div>
    )
}
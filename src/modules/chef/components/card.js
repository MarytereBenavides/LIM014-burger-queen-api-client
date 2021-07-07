import { deleteOrder, putOrder } from "../../../services/orderService";


export default function Card({order,ordersKitchen,setOrdersKitchen}) {

    const ordersPending = ordersKitchen.filter((e) => {
        return e.status === 'pending' ;
    })
    
    const handleDelivering = (e) =>{
        const idClicked = e.target.id
       console.log(idClicked)
       const oneOrder = ordersPending.filter((e)=>{ return e._id === idClicked });
       let body = {};
       oneOrder.map((e) => {
           return (
               body={
                   status: 'delivering',
                   userId: e.userId,
                   client: e.client,
                   products:e.products,
                   dateEntry: e.dateEntry,
                   dateProcessed: e.dateProcessed
               });
       });
       const updateOrders = ordersPending.filter((e) =>{return e._id !== idClicked
    });
    setOrdersKitchen(updateOrders)

 console.log('estoy aqui')
 
 putOrder(body,idClicked);
    }

    const handleCancel = (e) =>{
        const idClicked = e.target.id
       console.log(idClicked)
       const oneOrder = ordersPending.filter((e)=>{ return e._id === idClicked });
       let body = {};
       oneOrder.map((e) => {
           return (
               body={
               });
       });
       const updateOrders = ordersPending.filter((e) =>{return e._id !== idClicked
    });
    setOrdersKitchen(updateOrders)

 console.log('estoy aqui')
  deleteOrder(body,idClicked);
    }
  

    return (
           <div key={order._id} id={order._id} >
                     <section>
                     <h3>{order.client}</h3>
                     <span>{(new Date(order.dateEntry).toLocaleString()).slice(9,14)}</span>
                     </section>
                     <section>
                     <h3>Order Detail</h3>
                     <span>time run</span>
                     </section>
                     <section>
                     <p>{(order.products).map((order)=>(
                     <div>
                     <p>{order.product.name}</p> 
                     <span>{order.qty}</span>
                     </div>))}
                     </p>
                     </section>
                     <section>
                     <button id={order._id} onClick={handleCancel} >
                         CANCEL
                     </button>
                     <button id={order._id} onClick={handleDelivering}  >
                         DONE
                     </button>
                     </section>
                     <section>
                         {order.userId}
                     </section>
                </div> 
    )
}
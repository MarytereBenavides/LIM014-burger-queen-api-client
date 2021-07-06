import React, {useEffect,useState} from 'react'
// import { trackPromise} from 'react-promise-tracker';
import { getOrder } from '../../../services/orderService';


const ChefScreen = () => {
    const [ordersKitchen, setOrdersKitchen] = useState([]);

    const bringOrder = () => {
      getOrder()
      .then( res =>{
        if (res.statusText === "OK") {
          setOrdersKitchen(res.data)
        }
      })
    }


    useEffect(() => {
      bringOrder()
    }, [])

    return console.log(ordersKitchen) ||(
        <div>{ordersKitchen.map((product) => ( <div key={product._id}>{product.status}</div>))} </div>
    )
}

export default ChefScreen;
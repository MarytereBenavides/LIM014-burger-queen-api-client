import React, {useEffect,useState} from 'react'
// import { trackPromise} from 'react-promise-tracker';
import { getOrder } from '../../../services/orderService';


const ChefScreen = () => {
    const [ordersKitchen, setOrdersKitchen] = useState([]);


    useEffect(() => {
      // trackPromise(
        getOrder()
        .then ((resp) => {
        console.log('hola',resp.data)
        console.log(resp.data.length);
        setOrdersKitchen(resp.data) 
        })
        // return () => {

        // }
      // );
    }, [])

    return console.log(ordersKitchen) ||(
        <div>{ordersKitchen.map((product) => ( <div key={product._id}>{product.status}</div>))} </div>
    )
}

export default ChefScreen;
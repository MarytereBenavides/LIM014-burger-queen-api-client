import React, {useEffect,useState} from 'react'
import {getOrder} from '../../../services/products.js';
import { trackPromise} from 'react-promise-tracker';


const ChefScreen = () => {
    const [ordersKitchen, setOrdersKitchen] = useState([]);


    useEffect(() => {
      trackPromise(
        getOrder()
        .then ((resp) => {
        console.log('hola',resp.data)
        setOrdersKitchen(resp.data) 
        })
        // return () => {

        // }
      );
    }, [])

    return console.log(ordersKitchen) ||(
        <div>{ordersKitchen.map((product) => ( <div key={product._id}>{product.status}</div>))} </div>
    )
}

export default ChefScreen;
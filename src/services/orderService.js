// import axios from 'axios'
// import { URL_BACKEND } from '../environments/environments'
import { addData, dataList, deletData, updateStatusData } from './firebaseConfig'
// const token = localStorage.getItem("gdsldfgkl")

export const createOrder = async (order) => {
    const result = addData('orders', order)
    console.log(order, 'orderService')
    // const result = await axios({
    //     method:"POST",
    //     url:`${URL_BACKEND}/orders`,
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     },
    //     data:order
    // })
    // console.log(`hola mundo create`);
    // console.log(result.data.products);
    return result
}

export const getOrder = async () => {

    const result = dataList('orders');
    // const result = await axios({
    //     method: "GET",
    //     url: `${URL_BACKEND}/orders?limit=50000&page=1
    //     `,
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    return result
}


export const putOrder = async (actualStatus, orderId) => {
    const result = updateStatusData('orders', orderId, actualStatus)
    return result
}

export const deleteOrder = async (orderId) => {
    const result = await deletData('orders', orderId)
    return result
}
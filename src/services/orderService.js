import axios from 'axios'
import {URL_BACKEND} from '../environments/environments'
const token = localStorage.getItem("gdsldfgkl")

export const createOrder = async (order) => {
    const result = await axios({
        method:"POST",
        url:`${URL_BACKEND}/orders`,
        headers:{
            Authorization: `Bearer ${token}`
        },
        data:order
    })
    console.log(`hola mundo create`);
    console.log(result.data.products);
    return result
}

export const getOrder = async () => {
    const result = await axios({
        method:"GET",
        url:`${URL_BACKEND}/orders?limit=50000&page=1
        `,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return result
}


export const putOrder = async (order,orderId) => {
    const result = await axios({
        method:"PUT",
        url:`${URL_BACKEND}/orders/${orderId}`,
        headers:{
            Authorization: `Bearer ${token}`
        },
        data:order
    })
    console.log(`MODIICAR ORDEN`,result.data.products);
    return result
}

export const deleteOrder = async (order,orderId) => {
    const result = await axios({
        method:"DELETE",
        url:`${URL_BACKEND}/orders/${orderId}`,
        headers:{
            Authorization: `Bearer ${token}`
        },
        data:order
    })
    console.log(`MODIICAR ORDEN`,result.data.products);
    return result
}
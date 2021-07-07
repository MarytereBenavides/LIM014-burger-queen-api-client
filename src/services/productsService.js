import axios from 'axios'
import {URL_BACKEND} from '../environments/environments'
const token = localStorage.getItem("gdsldfgkl")

export const getProducts = () => {
    
    const result = axios({
        method:"GET",
        url:`${URL_BACKEND}/products?limit=50000&page=1`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return result
}

export const postProducts = (objProduct) => {
    const result = axios({
        method:"POST",
        url:`${URL_BACKEND}/products`,
        headers:{
            Authorization: `Bearer ${token}`
        },
        data:objProduct
    })
    return result

}
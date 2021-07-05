import axios from 'axios'
import {URL_BACKEND} from '../environments/environments'
const token = localStorage.getItem("gdsldfgkl")

export const getProducts = () => {
    
    const result = axios({
        method:"GET",
        url:`${URL_BACKEND}/products`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return result
}
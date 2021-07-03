import axios from 'axios'
import {URL_BACKEND} from '../environments/environments'

export const getProducts = (token) => {
    
    const result = axios({
        method:"GET",
        url:`${URL_BACKEND}/products`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return result
}
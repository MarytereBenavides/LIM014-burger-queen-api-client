import axios from 'axios';
import {URL_BACKEND} from './../environments/environments'

export const postLogin = (email, password)=>{
    const result = axios({
        method:"POST",
        url:`${URL_BACKEND}/auth`,
        data:{
            email,
            password
        }
    })
    return result
}

export const verifyToken = async (token) => {
    const result = await axios({
        method:"GET",
        url:`${URL_BACKEND}/products`,
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    )
    return result 
}





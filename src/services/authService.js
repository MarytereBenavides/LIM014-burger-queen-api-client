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




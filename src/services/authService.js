import axios from 'axios';
// import { URL_BACKEND } from './../environments/environments'
import { signInFirebase, validateUserFirebase } from './firebaseConfig'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const postLogin = async (email, password) => {

    // const result = axios({
    //     method:"POST",
    //     url:`${URL_BACKEND}/auth`,
    //     data:{
    //         email,
    //         password
    //     }
    // })
    // return result
    const loginData = await signInFirebase(email, password);
    localStorage.setItem("tokenLydemarExpress", loginData.uid)
    // const dataUser = await validateUserFirebase(loginData.uid)

    return { name: loginData.displayName, email: loginData.email, uid: loginData.uid };
}

export const verifyToken = async (token) => {
    // const result = await axios({
    //     method: "GET",
    //     url: `${URL_BACKEND}/products`,
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    // )
    // return result
}





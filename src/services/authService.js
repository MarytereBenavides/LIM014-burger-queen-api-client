import axios from 'axios';
// import { URL_BACKEND } from './../environments/environments'
import { auth } from './firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const postLogin = (email, password) => {
    // const result = axios({
    //     method:"POST",
    //     url:`${URL_BACKEND}/auth`,
    //     data:{
    //         email,
    //         password
    //     }
    // })
    // return result
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage);
            });
    });
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





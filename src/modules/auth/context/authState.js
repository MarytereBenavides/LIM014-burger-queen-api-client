import React, { useReducer } from 'react'
import AuthContex from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        autenticate:false,
        usuEmail:null,
        usuId:null,
        token:null,
        role:null,
        loading:true
    })
    // const startSessionWithLocalStorage = () =>{
    //     const token = localStorage.getItem("gdsldfgkl")
    //     console.log(token);
    // }
    const startSession = (token)=>{
        console.log('imprimir token');
        // console.log(token);
        const payload = token.split(".")[1]
        // console.log(payload);
        // Desencriptar el payload que esta en base 64
        const payloadDecrypt = window.atob(payload)
        const payloadJSON = JSON.parse(payloadDecrypt)
         // Inicicalizar LocalStorage 
         localStorage.setItem("gdsldfgkl", token)
        
        dispatch({
            type:"START_SESSION",
            data:{
                ...payloadJSON,
                token:token
            }
        })
    }

    const endSession = () =>{

    }

    return(
        <AuthContex.Provider value = {{
            startSession,
            endSession,
            usuEmail: state.usuEmail,
            usuId: state.usuId,
            role:state.role,
            loading: state.loading
        }} >
            {props.children}
        </AuthContex.Provider>
    )
}

export default AuthState
import React, { useContext } from 'react'
import {Redirect, Route} from 'react-router-dom'
import AuthContext from './modules/auth/context/authContext'

const RoutePrivate = ({path, componente:Componente}) => {

    const {autenticate, loading} = useContext(AuthContext)
    console.log(`hola autenticado`);
    // console.log(autenticate, loading);

    return (
        loading ?
        <h1>
            Cargando....
        </h1> :
        autenticate ?
        <Route path={path} component={Componente}/> :
        <Redirect to={"/"}/>
    )
}

export default RoutePrivate

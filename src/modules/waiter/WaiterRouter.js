import React from 'react'
import {Switch} from 'react-router-dom'
import RoutePrivate from '../../RoutePrivate'
import WaiterScreen from './screens/WaiterScreen'

const WaiterRouter = () =>{
    return (
        <Switch>
            <RoutePrivate path={'/'} componente={WaiterScreen}/>
        </Switch>

    )
}

export default WaiterRouter;
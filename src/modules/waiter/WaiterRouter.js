import React from 'react'
import {Switch,Route} from 'react-router-dom'
import WaiterScreen from './screen/WaiterScreen'

const WaiterRouter = () =>{
    return (
        <Switch>
            <Route path={'/'} component={WaiterScreen}/>
        </Switch>

    )
}

export default WaiterRouter;
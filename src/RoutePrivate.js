import React from 'react'
import {Route} from 'react-router-dom'

const RoutePrivate = ({path, component:Component}) => {
    return (
        <Route path={path} component={Component}/>
    )
}

export default RoutePrivate

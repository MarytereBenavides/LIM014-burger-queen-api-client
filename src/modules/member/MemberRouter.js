
import React from 'react'
import { Switch } from 'react-router-dom';
import RoutePrivate from '../../RoutePrivate';

import MemberScreen from './screens/MemberScreens';

const MemberRouter = () => {
    return (
        <Switch>
            <RoutePrivate path={"/"} componente = {MemberScreen}/>
        </Switch>
    )
}

export default MemberRouter;

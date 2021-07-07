
import React, { useContext } from 'react'
import { Redirect, Switch } from 'react-router-dom';
import RoutePrivate from '../../RoutePrivate';
import AuthContext from '../auth/context/authContext';

import MemberScreen from './screens/MemberScreens';

const MemberRouter = () => {
    const {role} = useContext(AuthContext)
    return (
        role?
        <Redirect to={'/admin'}/>:
        <>
            <Switch>
            <RoutePrivate path={"/"} componente = {MemberScreen}/>
        </Switch>
        </>
    )
}

export default MemberRouter;

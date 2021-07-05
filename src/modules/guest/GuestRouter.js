import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GuestScreen from './screens/GuestScreen';

const GuestRouter = () => {
    return (
        <Switch>
            <Route path={"/"} component={GuestScreen}/>
        </Switch>
    )
}

export default GuestRouter

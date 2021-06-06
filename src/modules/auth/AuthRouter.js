import React from 'react';
import {Switch,Route} from 'react-router-dom'
import AuthLoginScreen from './screens/AuthLoginScreen'

const AuthRouter = () =>{
    return(
        <Switch>
            <Route path={"/auth"} component={AuthLoginScreen} />
        </Switch>
    )
}

export default AuthRouter;
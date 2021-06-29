import React from 'react';
import {Switch,Route} from 'react-router-dom'
import AuthLoginScreen from './screens/AuthLoginScreen'

const AuthRouter = () =>{
    return(
        <Switch>
            <Route path={"/auth/login"} component={AuthLoginScreen} />
        </Switch>
    )
}

export default AuthRouter;
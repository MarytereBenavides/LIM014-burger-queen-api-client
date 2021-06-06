import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route} from 'react-router-dom';
import AuthRouter from './modules/auth/AuthRouter';

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/auth'} component={AuthRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route} from 'react-router-dom';
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import ChashierRouter from './modules/cashier/CashierRouter';
import ChefRouter from './modules/chef/ChefRouter';
import GuestRouter from './modules/guest/GuestRouter';
import WaiterRouter from './modules/waiter/WaiterRouter'

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path={'/cashier'} component={ChashierRouter}/>
                <Route path={'/waiter'} component={WaiterRouter}/>
                <Route path={'/Chef'} component={ChefRouter}/>
                <Route path={'/admin'} component={AdminRouter} />
                <Route path={'/auth'} component={AuthRouter} />
                <Route path={'/'} exact component={GuestRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
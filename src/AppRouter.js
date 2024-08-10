import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import CashierRouter from './modules/cashier/CashierRouter';
import ChefRouter from './modules/chef/ChefRouter';
import GuestRouter from './modules/guest/GuestRouter';
import MemberRouter from './modules/member/MemberRouter';
import WaiterRouter from './modules/waiter/WaiterRouter'

import '../src/scss/cashier.scss';
import '../src/scss/auth.scss';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/cashier'} component={CashierRouter} />
                <Route path={'/waiter'} component={WaiterRouter} />
                <Route path={'/chef'} component={ChefRouter} />
                <Route path={'/member'} component={MemberRouter} />
                <Route path={'/admin'} component={AdminRouter} />
                <Route path={'/auth'} component={AuthRouter} />
                <Route path={'/'} exact component={GuestRouter} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
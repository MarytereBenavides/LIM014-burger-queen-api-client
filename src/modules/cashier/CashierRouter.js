import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CashierScreen from './screens/CashierScreen'

const ChashierRouter = () => {
    return(
        <Switch>
            <Route path={'/'} component={CashierScreen}/>
        </Switch>
    )
}

export default ChashierRouter;
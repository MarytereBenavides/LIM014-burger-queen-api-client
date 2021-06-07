import React from 'react';
import {Switch,Route} from 'react-router-dom';
import CaschierScreen from './screens/CashierScreen'

const ChashierRouter = () => {
    return(
        <Switch>
            <Route path={'/'} component={CaschierScreen}/>
        </Switch>
    )
}

export default ChashierRouter;
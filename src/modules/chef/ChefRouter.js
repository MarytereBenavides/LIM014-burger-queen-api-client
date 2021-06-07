import React from 'react';
import {Switch,Route} from 'react-router-dom';
import ChefScreen from './screens/ChefScreen';


const ChefRouter = () => {
return(
    <Switch>
        <Route path={'/'} component={ChefScreen}/>
    </Switch>
)
}

export default ChefRouter;
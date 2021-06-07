import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminScreen from './screen/AdminScreen'

const AdminRouter = () => {
  return (
    <Switch>
      <Route path={'/'} component={AdminScreen}/>
    </Switch>
  );
};

export default AdminRouter;

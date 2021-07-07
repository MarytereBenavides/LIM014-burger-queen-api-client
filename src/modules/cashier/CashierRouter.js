import React, { useContext } from 'react'
import { Redirect, Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import CashierScreen from "./screens/CashierScreen";
import CashierHeader from './components/CashierHeader';
import AuthContext from '../auth/context/authContext';

const CashierRouter = () => {
  const {role} = useContext(AuthContext)
  return (
    role ?
    <Redirect to={'/admin'}/>:
    <>
    <CashierHeader/>
    <div>
      <Switch>
        <RoutePrivate path={"/"} componente={CashierScreen} />
      </Switch>
    </div>
  </>
  )
}

export default CashierRouter


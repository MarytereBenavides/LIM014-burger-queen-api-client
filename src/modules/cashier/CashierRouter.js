import React from 'react'
import { Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import CashierScreen from "./screens/CashierScreen";
import CashierHeader from './components/CashierHeader';

const CashierRouter = () => {
  return (
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


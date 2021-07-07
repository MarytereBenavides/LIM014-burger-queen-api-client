import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import WaiterScreen from "./screens/WaiterScreen";
import WaiterHeader from "./components/WaiterHeader";
import AuthContext from "../auth/context/authContext";

const WaiterRouter = () => {
  const {role} = useContext(AuthContext)
  return (
    role ?
    <Redirect to = {'/admin'}/>:
    <>
      <WaiterHeader />
      <main>
        <Switch>
          <RoutePrivate path={"/"} componente={WaiterScreen} />
        </Switch>
      </main>
    </>
  );
};

export default WaiterRouter;

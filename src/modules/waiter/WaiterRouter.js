import React from "react";
import { Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import WaiterScreen from "./screens/WaiterScreen";
import WaiterHeader from "./components/WaiterHeader";

const WaiterRouter = () => {
  return (
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

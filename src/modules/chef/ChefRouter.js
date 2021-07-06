import React from "react";
import { Switch} from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import ChefHeader from "./components/ChefHeader";
import ChefScreen from "./screens/ChefScreen";

const ChefRouter = () => {
  return (
    <>
      <ChefHeader/>
      <main>
        <Switch>
          <RoutePrivate path={"/"} componente={ChefScreen} />
        </Switch>
      </main>
    </>
  );
};

export default ChefRouter;

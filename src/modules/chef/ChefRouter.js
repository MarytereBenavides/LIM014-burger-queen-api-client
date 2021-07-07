import React, { useContext } from "react";
import { Redirect, Switch} from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import AuthContext from "../auth/context/authContext";
import ChefHeader from "./components/ChefHeader";
import ChefScreen from "./screens/ChefScreen";

const ChefRouter = () => {
  const {role} = useContext(AuthContext)
  return (
    role?
    <Redirect to = {'/admin'}/>:
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

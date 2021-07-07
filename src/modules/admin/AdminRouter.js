import React, { useContext } from "react";
import { Redirect, Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import AuthContext from "../auth/context/authContext";
import AdminHeader from "./components/AdminHeader";
import AdminDashboardScreen from "./screen/dashboard/AdminDashboardScreen";
import AdminEmployeesScreen from "./screen/employees/AdminEmployeesScreen";
import AdminProductsScreen from "./screen/products/AdminProductsScreen";


const AdminRouter = () => {
  const {role} = useContext(AuthContext)
  console.log(role);
  
  return (
    role ?
    <>
    <AdminHeader/>
    <main className="container">
    <Switch>
      <RoutePrivate path={"/admin/products"} componente={AdminProductsScreen}/>
      <RoutePrivate path={"/admin/employees"} componente={AdminEmployeesScreen}/>
      <RoutePrivate path={'/admin'} componente={AdminDashboardScreen}/>
    </Switch>
    </main>
    </> :
    <Redirect to = {'/member'} />

  );
};

export default AdminRouter;

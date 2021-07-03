import React from "react";
import { Switch } from "react-router-dom";
import RoutePrivate from "../../RoutePrivate";
import AdminDashboardScreen from "./screen/dashboard/AdminDashboardScreen";
import AdminEmployeesScreen from "./screen/employees/AdminEmployeesScreen";
import AdminProductsScreen from "./screen/products/AdminProductsScreen";

const AdminRouter = () => {
  return (
    <Switch>
      <RoutePrivate path={"/admin/products"} componente={AdminProductsScreen}/>
      <RoutePrivate path={"/admin/employees"} componente={AdminEmployeesScreen}/>
      <RoutePrivate path={'/admin'} componente={AdminDashboardScreen}/>
    </Switch>
  );
};

export default AdminRouter;

import React from "react";
import logoBurger from "../../../assets/images/LogoBurger.png";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div>
      <nav>
        <img src={logoBurger} alt="" />
        <ul>
          <li>
            <Link Link to={"/admin/employees"}>
              WORKERS
            </Link>
          </li>
          <li>
            <Link Link to={"/admin/products"}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link Link to={"/admin/products"}>
              SALES
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;

import React from "react";
import logoBurger from "../../../assets/images/LogoBurger.png";

const AdminHeader = () => {
  return (
    <div>
      <nav>
        <img src={logoBurger} alt="" />
        <ul>
          <li>
            <a href="!#">WORKERS</a>
          </li>
          <li>
            <a href="!#">PRODUCTS</a>
          </li>
          <li>
            <a href="!#">SALES</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminHeader;

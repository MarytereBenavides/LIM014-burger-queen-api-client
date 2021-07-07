import React from "react";
import { Link } from "react-router-dom";
import logoBurger from "../../../assets/images/LogoBurger.png";

const ChefHeader = () => {
  return (
    <div>
      <nav>
        <img src={logoBurger} alt="" />
        <ul>
          <li>
            <Link to={"/member"}>Menu</Link>
          </li>
          <li>
            <a href="!#">LogOut</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ChefHeader;

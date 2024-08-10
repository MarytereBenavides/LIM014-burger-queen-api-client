import React from 'react'
import { Link } from "react-router-dom";
import logoBurger from "../../../assets/images/LogoBurger.png";

const WaiterHeader = () => {
  return (
    <div>
      <nav>
        <header className="container__header">
          <h1 className='titleCenter' style={{ "color": "white" }}>
            Restaurante Lydemar
          </h1>
        </header>
        <ul className="list_options">
          <li>
            <Link to={"/member"} className="form-btnLogin ">Menu</Link>
          </li>
          <li>
            <a href="/" className="form-btnLogin ">LogOut</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default WaiterHeader

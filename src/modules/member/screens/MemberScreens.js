import React from "react";
import LogoBurger from '../../../assets/images/LogoBurger.png'
import { Link } from 'react-router-dom'

const MemberScreen = () => {
  return (
    <div className="box">
      <header className="container__header">
        <h1 className='titleCenter' style={{ "color": "white" }}>
          Restaurante Lydemar
        </h1>
      </header>
      <section style={{ "gap": "30px", "display": "flex", "flexDirection": "column", "marginTop": "20px" }}>
        <Link to={'/cashier'} className="form-btnLogin">CASHIER</Link>
        <Link to={'/chef'} className="form-btnLogin">KITCHEN </Link>
        <Link to={'/waiter'} className="form-btnLogin">WAITER</Link>
      </section>
    </div>
  );
};

export default MemberScreen;

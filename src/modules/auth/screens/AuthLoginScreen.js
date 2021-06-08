import React from "react";
import "../../../scss/auth.scss";
import logo from "../../../assets/images/LogoBurger.png";

const AuthLoginScreen = () => {
  return (
    <div className="container">
      <header className="container__header">
        <img src={logo} width="973" height="191" alt="logo" />
      </header>
      <main className="container__login">
        <form className="container__login-form">
          <label className="form-label">Gmail</label>
          <input className="form-input" type="email" placeholder="user@gmail.com"></input>
          <label className="form-label">Password</label>
          <input type="password" placeholder="***********" className="form-input" ></input>
          <div>
            <button className="form-btnLogin" type="submit">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AuthLoginScreen;

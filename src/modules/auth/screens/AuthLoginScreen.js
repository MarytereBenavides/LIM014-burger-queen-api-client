import React, { useContext, useState } from "react";
// import { useHistory } from "react-router-dom";
import "../../../scss/auth.scss";
import logo from "../../../assets/images/LogoBurger.png";
import { postLogin } from "../../../services/authService";
import AuthContext from "../context/authContext";

const AuthLoginScreen = ({ history }) => {
  const { startSession, role } = useContext(AuthContext)
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    console.log(`Actualizar la variable de estado`);
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hola mundo`);
    console.log(formLogin);
    postLogin(formLogin.email, formLogin.password).then(res => {
      history.push("/admin")
    })
  }

  return (
    <div className="container box">
      <header className="container__header">
        <h1 className='titleCenter' style={{ "color": "white" }}>
          Restaurante Lydemar
        </h1>
      </header>
      <main className="container__login">
        <form
          className="container__login-form"
          onSubmit={handleSubmit}
        >
          <label className="form-label">Gmail</label>
          <input
            className="form-input"
            type="email"
            placeholder="user@gmail.com"
            name="email"
            onChange={handleChange}
            value={formLogin.email}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="***********"
            className="form-input"
            name="password"
            onChange={handleChange}
            value={formLogin.password}
          />
          <div style={{ "alignSelf": "center" }}>
            <button className="form-btnLogin" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AuthLoginScreen;

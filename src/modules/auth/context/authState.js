import React, { useEffect, useReducer } from "react";
import { verifyToken } from "../../../services/authService";
import AuthContex from "./authContext";
import AuthReducer from "./authReducer";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    autenticate: false,
    usuEmail: null,
    usuId: null,
    token: null,
    role: null,
    loading: true,
  });

  const startSessionWithLocalStorage = () => {
    const token = localStorage.getItem("gdsldfgkl");
    // console.log(`linea 16 authState`);
    // console.log(token);
    if (token) {
      // console.log(`linea 21 verifys`);
      verifyToken(token)
        .then((resp) => {
          // console.log(`imprimir rs`);
          // console.log(resp);
          if (resp.status === 200) {
            const payload = token.split(".")[1];
            const payloadDecrypt = window.atob(payload);
            const payloadJSON = JSON.parse(payloadDecrypt);
            
            dispatch({
                type:"START_SESSION",
                data: {
                    ...payloadJSON,
                    token:token
                }
            })
            
          }
          
        })
        .catch((error) => {
          console.log(`Hola error`);
          console.log(error)
          dispatch({
            type:"CLOSE_SESSION"
          })
          
        } );
    } else {
      dispatch({
        type:"CLOSE_SESSION"
      })
    }
  };

  useEffect(() => {
    startSessionWithLocalStorage();
  }, []);

  const startSession = (token) => {
    console.log("imprimir token");
    // console.log(token);
    const payload = token.split(".")[1];
    // console.log(payload);
    // Desencriptar el payload que esta en base 64
    const payloadDecrypt = window.atob(payload);
    const payloadJSON = JSON.parse(payloadDecrypt);
    // Inicicalizar LocalStorage
    localStorage.setItem("gdsldfgkl", token);

    dispatch({
      type: "START_SESSION",
      data: {
        ...payloadJSON,
        token: token,
      },
    });
  };

  const endSession = () => {
    dispatch({
      type:"CLOSE_SESSION"
    })
  };

  return (
    <AuthContex.Provider
      value={{
        usuEmail: state.usuEmail,
        usuId: state.usuId,
        role: state.role,
        loading: state.loading,
        autenticate:state.autenticate,
        token:state.token,
        startSession,
        endSession,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};

export default AuthState;

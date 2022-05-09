import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {  HashRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext.jsx";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);



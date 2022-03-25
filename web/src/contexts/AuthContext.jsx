import React from "react";
import { useNavigate } from "react-router";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = React.useState(JSON.parse(localStorage.user || null));
  const navigate = useNavigate();

  function handleLogin(user) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function handleLogout() {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  }

  const value = {
    user,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;


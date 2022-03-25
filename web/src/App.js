import { Navigate, Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import Products from "./pages/Products";
import React from "react";
import Login from "./components/Login/Login";


function App() {

  const [user, setUser] = React.useState(null)

  function authGuard() {

    if (!user) {
      return <Navigate to='/login' />
    }

  }


  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<ProductCategories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login/>}/>
          {/* <Route path='/login' element={}/>
          <Route path='/login' element={}/> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Products from "./pages/Products/Products.jsx";
import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Secondarybar from "./components/SecondaryBar/SecondaryBar";
import './App.css'
import Home from "./pages/Home/Home";
import Profile from "./components/Profile/Profile";
import CartOrder from "./components/CartOrder/CartOrder";
import Pay from "./components/Pay/Pay";


function App() {
  return (
    <div className="app ">
      <NavBar />

      <div className="container">
        <Secondarybar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/shopping-cart' element={<ShoppingCart />} />
          <Route path='/shopping-cart/order' element={<CartOrder/>} />
          <Route path="/pay" element={<Pay/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

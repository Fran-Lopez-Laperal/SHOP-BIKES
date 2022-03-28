import {Route, Routes} from "react-router";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import Products from "./pages/Products";
import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Secondarybar from "./components/SecondaryBar/SecondaryBar";
import './App.css'


function App() {
  return (
    <div className="app">
      <NavBar />
      <Secondarybar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<ProductCategories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail/>}></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

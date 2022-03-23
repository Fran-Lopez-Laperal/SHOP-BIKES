import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductList from "./components/ProductList/ProductList";


function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<ProductCategories />} />
          <Route path='/products' element={<ProductList />} />
        
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

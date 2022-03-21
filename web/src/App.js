import { Route, Routes } from "react-router";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/NavBar";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/products' element={<Home/>} />
        <Route path='/products/:id' element={<ProductDetail/>}  />
      </Routes>

    </div>
  );
}

export default App;

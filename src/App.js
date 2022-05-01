import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:productId" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

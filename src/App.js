import { Route, Routes } from "react-router-dom";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/manageInventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

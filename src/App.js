import { Route, Routes } from "react-router-dom";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import NotFound from "./components/NotFound/NotFound";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import AddOrders from "./components/AddOrders/AddOrders";
import Charts from "./components/Charts/Charts";
import MyItems from "./components/MyItems/MyItems";
import Blog from "./components/Blog/Blog";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:productId" element={<RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>}></Route>
        <Route path="/manageInventory" element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/manageOrders" element={<ManageOrders></ManageOrders>}></Route>
        <Route path="/addNewOrder" element={<AddOrders></AddOrders>}></Route>
        <Route path="/charts" element={<Charts></Charts>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

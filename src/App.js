import { Route, Routes } from "react-router-dom";
// import Page_Not_Found from './components/Page_Not_Found';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Add_product from "./components/Add_product";
import Add_category from "./components/Add_category";
import Dashboard from "./components/Dashboard";
import View_order from "./components/View_order";
import Add_product_container from "./components/Add_product_container";
import Add_category_container from "./components/Add_category_container";
import Pagination from "./components/Pagination";
import Dashboard_new from "./components/Dashboard_new";
import axios from "axios";
import User_detail from "./components/User_detail";
import Order_detail from "./components/Order_detail";
import Edit_Category from "./components/Edit_Category";
import Edit_Product from "./components/Edit_Product";
import Seller_Login from "./components/Seller_Login";

//Allow axios credentials
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      {/* <Route path='*' element={<Page_Not_Found/>}></Route> */}
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/seller_login" element={<Seller_Login />}></Route>
        <Route path="/add-product" element={<Add_product />}></Route>
        <Route path="/add-category" element={<Add_category />}></Route>
        <Route path="/editcatergory/:_id" element={<Edit_Category />}></Route>
        <Route path="/product" element={<Add_product_container />}></Route>
        <Route path="/editprodut/:_id" element={<Edit_Product />}></Route>
        <Route path="/category" element={<Add_category_container />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/view-order" element={<View_order />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        {/* <Route path='/dashboard-new' element={<Dashboard_new />}></Route> */}
        <Route path="/user-detail" element={<User_detail />}></Route>
        <Route path="/order-detail" element={<Order_detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

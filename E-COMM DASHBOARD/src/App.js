import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./NavbarRouter/SignUp";
import Products from "./NavbarRouter/Products";
import AddProduct from "./NavbarRouter/AddProduct";
import Nav from "./NavbarRouter/Nav";
import Logout from "./NavbarRouter/Logout";
import Profile from "./NavbarRouter/Profile";
import Update from "./NavbarRouter/Update";
import PrivateRoute from "./NavbarRouter/PrivateRoute";
import Login from "./NavbarRouter/Login";

function App() {
  return (
      <BrowserRouter>
         <Nav/>
         <Routes>

          <Route element={<PrivateRoute/>}>
             <Route path="/" element={<Products/>}/>
             <Route path="/AddProduct" element={<AddProduct/>}/>
             <Route path="/Update" element={<Update/>}/>
             <Route path="/Logout" element={<Logout/>}/>
             <Route path="/Profile" element={<Profile/>}/>
          </Route>

             <Route path="/SignUp" element={<SignUp/>}/>
             <Route path="/Login" element={<Login/>}/>
         </Routes>
      </BrowserRouter>
  );
}

export default App;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    const auth = localStorage.getItem('Users');
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        navigate('/SignUp');
    }
    
    return (
      <React.Fragment>
         {  
         auth?<div className="navbar">
            <img className="navbarimage" src="https://st2.depositphotos.com/1000528/8788/i/450/depositphotos_87886924-stock-photo-indian-flag-of-india.jpg" alt="India" title="I Love My India"/>
            <div className ="navitem">
                <Link className="navlink" to='/'>Products</Link>
            </div>
            <div className ="navitem">
                <Link className="navlink" to='/AddProduct'>Add Product</Link>
            </div>
            <div className ="navitem">
                <Link className="navlink" to='/Update'>Update Product</Link>
            </div>
            <div className ="navitem">
                <Link className="navlink" to='/Profile'>Profile</Link>
            </div>
            <div className ="navitem">
                <Link className="navlink" onClick={Logout} to='/SignUp'>Logout({JSON.parse(auth).UserName})</Link>
            </div>
           </div>:
           <div className="navbar navbarright">
            <div className ="navitem">
                 <Link className="navlink navitem" to='/SignUp'>SignUp</Link>
            </div>
            <div className ="navitem">
                 <Link className="navlink navitem" to='/Login'>Login</Link>
            </div>
           </div> 
        } 
        <div className="footer">E-Comm Dashboard</div>
      </React.Fragment>
    );
  }
  
  export default Nav;
import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../content/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <div className="navsec">
        <div className="title">
          <h2>VK Store</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search...." />
        </div>
        <div className="user">
          <div className="userdetails">
            <button>Sign In/Sign Up</button>
          </div>
        </div>

        <div className="cart">
          <Link to="/cart">  <button className="cart">Cart</button> <span>{cartItems.length}</span></Link>
        </div>
      </div>
      <div className="submenu">
        <ul>
          <Link to="/mobiles"> <li>Mobile</li></Link>
          <Link to="/watches"><li>Watches</li></Link>
          <Link to="/books"><li>Books</li> </Link>
          <Link to="/computers"><li>Computer</li></Link>
          <Link to="/kitchen"><li>Kitchen</li></Link>
          <Link to="/men"><li>Men</li></Link>
          <Link to="/woman"><li>Woman</li></Link>
          <Link to="/fridge"><li>Fridge</li> </Link>
          <Link to="/ac"><li>Air Conditoner</li></Link>
          <Link to="/ac"><li>Air Conditoner</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import './styles.css';
import {AiOutlineHeart} from "react-icons/ai"
import {TiShoppingCart} from "react-icons/ti"
import {FaUserCircle} from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="navbar">
      
      <div className="navbar-logo"><a href="#" style={{textDecoration:"none",color:"white"}}>GIFTIFY</a></div>
      <div className={`navbar-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div className="navbar-menu-overlay-links">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Wishlist</a>
          <a href="#"> Cart</a>
          <a href="#">User Account</a>
        </div>
      </div>
      
      {/* <div className="navbar_search">
        <input type="text" placeholder="Search here..." /><button style={{marginLeft:"100px"}} >Search</button>
      </div> */}
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <a href="/wishlist"><AiOutlineHeart size="22px"/></a>
        <a href="/cart"><TiShoppingCart size="22px"/></a>
        <a href="#"><FaUserCircle size="22px"/></a>
        <div class="navbar-dropdown-content">
        <a href="/login" className="log-btn" style={{border:"2px solid white", borderRadius:"5px",padding:"7px"}}>Login / Signup</a>
        
      </div>
      </div>
    </nav>
  );
}

export default Navbar;

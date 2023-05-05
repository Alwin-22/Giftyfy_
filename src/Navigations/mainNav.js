import Home from "../Screens/Home";
import React from "react";
import {
  BrowserRouter as NavigationProvider,
  Routes,
  Route,
} from "react-router-dom";
import Details from "../Screens/Details";
import Wishlist from "../Screens/Wishlist";
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";
import CategoryPage from "../Screens/Categories";
import Login from "../Screens/login";
import Cart from "../Screens/CART";
function MainNav(params) {
  return (
    <NavigationProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryPage/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
    </NavigationProvider>
  );
}
export default MainNav;

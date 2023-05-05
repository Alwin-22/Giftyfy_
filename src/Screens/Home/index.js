import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Header";
import Footer from "../../Components/Footer";
import Category from "../Categories";
import LoginPage from "../login";
import HomePage from "../homepage_test";


export default function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      <HomePage/>
      
    </div>
  );
}

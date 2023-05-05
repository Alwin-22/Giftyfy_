import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div>
        
    <div className="footer-container">
      <div className="footer-about">
        <h3>About Us</h3>
        <p>We are a gifting website that offers a wide range of personalized gifts for all occasions. Our mission is to make gifting easy and fun for everyone.</p>
      </div>
      <div className="footer-links">
        <h3>Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Careers</a></li>
                                   
        </ul>
      </div>
      
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>123 Main Street</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@giftify.com</p>
      </div>
      
     
   
    </div>
    <div className='feeter' style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
    <h1 style={{alignSelf:'center'}}>GIFTIFY</h1>
    <p>Copyright © 2023 GIFTIFY, Inc. </p>
    <p><a href="">Legal Stuff</a> | <a href=''>Privacy Policy</a> | <a href=''>Security</a></p>
    </div>
    </div>
  );    
}

export default Footer;

import React, { useState } from 'react';
import './styles.css';
import Navbar from "../../Components/Header";
import Footer from "../../Components/Footer";

const Wishlist = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Birthday Personalized Mug', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-birthday-sprinkles-personalized-magic-mug-19292-m.jpg', price: '$10' },
    { id: 2, name: 'Personalized Wallet Hamper', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-stylish-personalized-wallet-hamper-192290-m.jpg', price: '$20' },
    { id: 3, name: 'The Red Velvety Surprise', image: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-the-red-velvety-surprise-204540-m.jpg', price: '$30' },
  ]);
  
  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="wishlist-items">
        {items.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <div className="wishlist-item-details">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

import React, { useState } from 'react';
import './styles.css';

const CartPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Mango Cake', price: 10 },
    { id: 2, name: 'Leather Journal', price: 15 },
    { id: 3, name: 'Birthday Personalized Mug', price: 20 }
  ]);

  const [total, setTotal] = useState(0);

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  }

  const handleCheckout = () => {
    alert(`Checkout - Total: ${total}`);
  }

  const calculateTotal = () => {
    let sum = 0;
    items.forEach(item => sum += item.price);
    setTotal(sum);
  }

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: ${total}</p>
        <button onClick={calculateTotal}>Calculate Total</button>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;

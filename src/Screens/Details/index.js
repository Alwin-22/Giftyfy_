import React, { useState } from 'react';
import '../Home/styles.css';

const DetailPage = () => {
  const [wishlist, setWishlist] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const handleAddToWishlist = () => {
    setWishlist(true);
    alert('Added to wishlist!');
  }

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
    alert('Added to cart!');
  }

  return (
    <div className="detail-page">
      <div className="detail-image">
        <img src="https://via.placeholder.com/400x400" alt="Product" />
      </div>
      <div className="detail-content">
        <h2>Product Name</h2>
        <p className="product-code">Product Code: P001</p>
        <div className="product-rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <p className="product-price">$10.00</p>
        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ipsum et purus fringilla lobortis eget eget ante. Praesent non turpis ac mauris malesuada semper. Suspendisse vel ipsum velit. Aliquam erat volutpat. Maecenas eu rutrum lectus.</p>
        <button className="add-to-wishlist" onClick={handleAddToWishlist} disabled={wishlist}>Add to Wishlist</button>
        <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
        <p className="cart-count">{cartItems} items in cart</p>
      </div>
    </div>
  );
}

export default DetailPage;

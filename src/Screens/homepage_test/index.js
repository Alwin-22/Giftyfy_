import React, { useState } from "react";
import "./styles.css";
import Heart from "react-animated-heart";

const products = [
  {
    id: 1,
    name: "Birthday Personalized Mug",
    price: "$20",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-birthday-sprinkles-personalized-magic-mug-19292-m.jpg",
  },
  {
    id: 2,
    name: "Mango Cake",
    price: "$30",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-sunshine-mango-cake-half-kg--206187-m.jpg",
  },
  {
    id: 3,
    name: "Leather Journal",
    price: "$40",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-happy-birthday-personalized-leather-journal-133062-m.jpg",
  },
  {
    id: 4,
    name: "Personalized Birthday Pop-Up Box With Treats",
    price: "$50",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-birthday-pop-up-box-with-treats-146204-m.jpg",
  },
  {
    id: 5,
    name: "Marvel Siper",
    price: "$60",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-ant-man-the-wasp-personalized-sipper-202612-m.jpg",
  },
  {
    id: 6,
    name: "Mother's Day Hamper",
    price: "$70",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-love-you-mom-mother-s-day-hamper-205722-m.jpg",
  },
  {
    id: 7,
    name: "Personalized Mobile Stand",
    price: "$20",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-happy-birthday-personalized-mobile-stand-133465-m.jpg",
  },
  {
    id: 8,
    name: "Personalized Star Studded Black Handbag",
    price: "$30",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-star-studded-black-handbag-204085-m.jpg",
  },
  {
    id: 9,
    name: "Personalized Wallet Hamper",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-stylish-personalized-wallet-hamper-192290-m.jpg",
  },
  {
    id: 10,
    name: "Personalized Premium Black Portable Mini Bar Set",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-premium-black-portable-mini-bar-set-206434-m.jpg",
  },
  {
    id: 11,
    name: "Smart Personalized Stainless Steel Water bottle",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-smart-personalized-stainless-steel-water-bottle-350-ml--149554-m.jpg",
  },
  {
    id: 12,
    name: "The Red Velvety Surprise",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-the-red-velvety-surprise-204540-m.jpg",
  },
  {
    id: 13,
    name: "Guardians Of The Galaxy Baby Groot Men's T-shirt",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-guardians-of-the-galaxy-baby-groot-men-s-t-shirt-205674-m.jpg",
  },
  {
    id: 14,
    name: "Personalized Designer Golf Set Wine Tools",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-designer-golf-set-wine-tools-203244-m.jpg",
  },
  {
    id: 15,
    name: "Personalized Vogue Gift Set for Women",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-vogue-gift-set-for-women-189748-m.jpg",
  },
  {
    id: 16,
    name: "Cherry Filled Chocolate Cake (Half Kg)",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-cherry-filled-chocolate-cake-half-kg--110218-m.jpg",
  },
  {
    id: 17,
    name: "Premium Couverture Chocolate Hamper",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-premium-couverture-chocolate-hamper-191990-m.jpg",
  },
  {
    id: 18,
    name: "Lucky Bamboo In Mini Bowl Glass Vase",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-lucky-bamboo-in-mini-bowl-glass-vase-139332-m.jpg",
  },
  {
    id: 19,
    name: "Wooden Spectacles Holder with Mug",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-lucky-bamboo-in-mini-bowl-glass-vase-139332-m.jpg",
  },
  {
    id: 20,
    name: "Wooden Spectacles Holder with Mug",
    price: "$10",
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-personalized-king-caricature-with-wooden-stand-124676-m.jpg",
  },

];
const SliderData = [
  {
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt31prodlp/banners/guardians_d_igp_banner_20230427.jpg",
  },
  {
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt31prodlp/banners/birthday_d_igp_banner_20221227.jpg",
  },
  {
    image:
      "https://cdn.igp.com/f_auto,q_auto,t_pnopt31prodlp/banners/anniversary_d_igp_banner_20221226.jpg",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductCard = ({ product }) => {
  const [data1, setData] = useState(products);
  const handleChange = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };
  const [isClick, setClick] = useState(false);
  return (

    <div className="product-card">
    
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <span className="price">{product.price}</span>
        {/* <button className="wishlist-btn" onclick={() => setClick(!isClick)}> */}
        <div className="heart-btn">
          <Heart onClick={()=> setClick(!isClick)} isClick= {isClick} />
          </div>
        {/* </button> */}
      </div>
    </div>
  );
};
const ProductRow = ({ heading, products }) => (
  <div className="product-row">
    <h2>{heading}</h2>
    <div className="product-cards">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const HomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredData = products.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filteredData);
  };

  return (
    <div className="home-page">
      <div className="search-bar">
        <input type="text" placeholder="Search by name" onChange={handleSearch} />
      </div>
      <ProductRow heading="Featured Products" products={filteredProducts.slice(0, 3)} />
      <ProductRow heading="New Arrivals" products={filteredProducts.slice(3, 6)} />
      <ProductRow heading="Best Sellers" products={filteredProducts.slice(6, 9)} />
      <ProductRow heading="Best Sellers" products={filteredProducts.slice(9, 12)} />
      <ProductRow heading="Best Sellers" products={filteredProducts.slice(12, 15)} />
      <ProductRow heading="Best Sellers" products={filteredProducts.slice(15, 18)} />
      <ProductRow heading="Best Sellers" products={filteredProducts.slice(18, 21)} />
    </div>
  );
};


export default HomePage;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instamart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data.slice(0, 20)); 
  };

  return (
    <div className="swiggy-mart">
      {/* Header */}
      <div className="mart-header">
        <h1>🛒 InstaMart</h1>
        <input type="text" placeholder="Search for groceries..." />
      </div>

      {/* Categories */}
      <div className="categories">
        <button>🍏 Fruits</button>
        <button>🥛 Dairy</button>
        <button>🥪 Snacks</button>
        <button>🥩 Meat</button>
        <button>🧴 Personal Care</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title.substring(0, 20)}...</h3>
            <p>₹{(product.price * 80).toFixed(2)}</p> {/* Convert to INR */}
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instamart;

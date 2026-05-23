import React from "react";
import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Headphones",
      price: "$50",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$80",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 4,
      name: "Laptop",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />

          <h2>{product.name}</h2>

          <p>{product.price}</p>

          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;
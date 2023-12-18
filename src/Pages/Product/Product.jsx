// ProductPage.js
import React from "react";
import ProductComponent from "./ProductComponent";
import "../Product/product.css";
import products from "./ProductsData";

const ProductPage = () => {
  const handleAddToCart = (productId) => {
    // Add your logic to handle adding the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="product-page">
      <b>
        {" "}
        <h1 className="bold-text">Best of Products</h1>
      </b>
      <div className="product-list">
        {products.map((product) => (
          <ProductComponent
            onClick={() => navigate(`/products/${product.id}`)}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

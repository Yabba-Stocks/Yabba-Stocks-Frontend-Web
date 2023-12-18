// ProductComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { addToCart } from "../../Redux/cartSlice";

const ProductComponent = ({ id, name, price, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const firstImageUrl = imageUrl?.length > 0 ? imageUrl[0] : imageUrl;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, imageUrl, quantity: 1 }));
  };

  return (
    <div
      className="product-com"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container-com">
        <Link to={`/products/${id}`}>
          <img src={firstImageUrl} alt={name} />
        </Link>
        {isHovered && (
          <div className="add-to-cart-com" onClick={handleAddToCart}>
            <p className="add-to-cart-com-p">Add to Cart</p>
            <MdShoppingCart className="icon-cart-product" />
          </div>
        )}
      </div>

      <div className="product-info-com">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductComponent;

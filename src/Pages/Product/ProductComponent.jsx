// ProductComponent.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { addToCart } from "../../Redux/cartSlice";

const ProductComponent = ({ id, name, price, imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, imageUrl, quantity: 1 }));
  };

  return (
    <div
      className="product-com"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Link to={`/products/${id}`}> */}
        <div className="image-container-com">
          <img src={imageUrl} alt={name} />
          {isHovered && (
            <div className="add-to-cart-com"  onClick={handleAddToCart}>
              <p className="add-to-cart-com-p">
                Add to Cart
              </p>
              <MdShoppingCart className="icon-cart-product" />
            </div>
          )}
        </div>
      {/* </Link> */}
      <div className="product-info-com">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductComponent;

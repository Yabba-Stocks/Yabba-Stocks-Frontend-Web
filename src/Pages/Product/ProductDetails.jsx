import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import CartButtons from "../Cart/CartButtons";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NewsletterForm from "../Subscribe/Subscribe";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const product = products.find((p) => p.id === parseInt(productId));
  const cartItem = cartItems?.items?.find((p) => p.id === parseInt(productId));
  console.log(cartItems, cartItem, "dddd");
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  const handleIncreaseQuantity = () => {
    // Dispatch the increaseQuantity action here
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleAddToCart = () => {
    // Dispatch the addToCart action here
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: [selectedImage || product.imageUrl[0]],
        quantity: 1,
      })
    );
  };
  return (
    <div>
      <div className="product-details-page">
        <div className="product-details-page-img">
          <img
            src={selectedImage || product.imageUrl[0]}
            alt={product.name}
            className="img-desc"
          />
          <div className="thumbnail-images">
            {product.imageUrl.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={product.name}
                onClick={() => handleImageClick(imageUrl)}
                style={{
                  border:
                    selectedImage === imageUrl ? "2px solid #ffcb02" : "none",
                  padding: 6,
             
                }}
                className="width-desc"
              />
            ))}
          </div>
        </div>

        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          {cartItem?.quantity > 0 ? (
            <h2 className="price-desc">
              <b>Total:</b> ${product.price * cartItem?.quantity}
            </h2>
          ) : null}
          <div className="div-desc">
            <CartButtons
              onAdd={handleAddToCart}
              quantity={cartItem?.quantity ? cartItem?.quantity : 0}
              //  onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          </div>
        </div>
      </div>
      <div>
        <NewsletterForm />
      </div>
    </div>
  );
};

export default ProductDetails;

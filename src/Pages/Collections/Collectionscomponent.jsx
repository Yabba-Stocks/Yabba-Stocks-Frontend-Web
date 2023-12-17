// CollectionGridItem.js
import React, { useEffect } from "react";
import "./CollectionGridItem.css"; // Import the CSS file for styling
import { FaAngleRight } from "react-icons/fa6";

const CollectionGridItem = ({ name, imageUrl, items }) => {
  const cacheImage = () => {
    const img = new Image();
    img.src = imageUrl;
  };

  // Cache the image when the component mounts
  React.useEffect(() => {
    cacheImage();
  }, [imageUrl]);

  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} />
      <div className="collection-div-relative">
        <h3 className="collection-h3">{name}</h3>
        <p className="collection-p">{items}</p>
      </div>
      <div className="collection-name">
        <p>{name}</p>
        <FaAngleRight className="arrow-icon" />
      </div>
    </div>
  );
};
export default CollectionGridItem;

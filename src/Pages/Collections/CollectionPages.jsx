// CollectionPage.js
import React from "react";
import CollectionGridItem from "./Collectionscomponent";
import one from "../../assets/assets/Loaders/eleven.jpg";
import two from "../../assets/assets/Loaders/twelve.jpg";
import thre from "../../assets/assets/Loaders/One.jpg";
import four from "../../assets/assets/Loaders/two.jpg";
import five from "../../assets/assets/Loaders/three.jpg";
import six from "../../assets/assets/Loaders/four.jpg";
import { Link } from "react-router-dom";

const collections = [
  { id: 1, name: "Collection 1", items: "2345 items", imageUrl: one },
  { id: 1, name: "Collection 2", items: "454 items", imageUrl: two },
  { id: 1, name: "Collection 3", items: "21111 items", imageUrl: thre },
  { id: 1, name: "Collection 4", items: "45 items", imageUrl: four },
  { id: 1, name: "Collection 5", items: "875 items", imageUrl: five },
  { id: 1, name: "Collection 6", items: "0933 items", imageUrl: six },
];

const CollectionPage = () => {
  return (
    <div className="collection-page">
      <h1>Collections</h1>
      <div className="collection-grid">
        {collections.map((collection, index) => (
          <Link to={`/products`}>
            <CollectionGridItem
              key={index}
              name={collection.name}
              items={collection.items}
              imageUrl={collection.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

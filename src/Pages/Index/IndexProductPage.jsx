import React from "react";
import HeroSlider from "../Hero/HeroSlider";
import ProductPage from "../Product/Product";

import ContactUsForm from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import CollectionPage from "../Collections/CollectionPages";

const IndexProductPage = () => {
  return (
    <>
      <HeroSlider />
      <ProductPage />
      <CollectionPage />
      {/* <ContactUsForm /> */}
   
    </>
  );
};

export default IndexProductPage;

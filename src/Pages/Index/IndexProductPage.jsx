import React from "react";
import HeroSlider from "../Hero/HeroSlider";
import ProductPage from "../Product/Product";
import CollectionPage from "../Collections/CollectionPAGE.JSX";
import ContactUsForm from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

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

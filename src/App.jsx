import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Indexed from "./Index/Indexed";
import ProductDetails from "./Pages/Product/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Pages/Footer/Footer";
import NavigationBar from "./Pages/Navbar/NavigationBar";
import ProductPage from "./Pages/Product/Product";
import PaymentPage from "./Pages/Payment/Pay";
import Login from "./Pages/Sellers/Auth/Login";
import Register from "./Pages/Sellers/Auth/Register";
import Verify from "./Pages/Sellers/Auth/Verify";
import Forgot from "./Pages/Sellers/Auth/Forgot";
import Password from "./Pages/Sellers/Auth/NewPassword";
import SubscriptionPage from "./Pages/Sellers/plans/Plans";
import PaymentPages from "./Pages/Sellers/Payment/PaymentPage";
import ProductUpload from "./Pages/Sellers/Product/Product";

const App = () => {
  const ScrollToTop = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [navigate]);

    return null;
  };

  const location = useLocation();
  const pathsToHideNavbarr = [
    "/login",
    "/register",
    "/verify",
    "/forgot",
    "/new-password",
  ];
  const shouldShowNavbarr = !pathsToHideNavbarr.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {shouldShowNavbarr && <NavigationBar />}

      <Routes>
        <Route path="/" element={<Indexed />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/new-password" element={<Password />} />
        <Route path="/plans" element={<SubscriptionPage />} />
        <Route path="/paysell" element={<PaymentPages />} />
        <Route path="/sellersproduct" element={<ProductUpload />} />
      </Routes>
      {shouldShowNavbarr && <Footer />}
    </>
  );
};

export default App;

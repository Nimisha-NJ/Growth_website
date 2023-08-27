import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import Call from "../pages/Call";
import Customer from "../pages/Customers";
import Growth from "../pages/Growth";
import OurFixes from "../pages/OurFixes";
import EyeOpeners from "../pages/EyeOpeners";
import WhyUs from "../pages/WhyUs";

function LayoutRoutes() {
  return (
    <div>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/call" element={<Call />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/EyeOpeners" element={<EyeOpeners />} />
            <Route path="/Growth" element={<Growth />} />
            <Route path="/OurFixes" element={<OurFixes />} />
            <Route path="/WhyUS" element={<WhyUs />} />
          </Routes>

          <Footer />
        </Router>
      </>
    </div>
  );
}

export default LayoutRoutes;

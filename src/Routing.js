import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./module/Navbar/Navbars";
import Dashboard from "./module/LandingPage/container/Dashboard";
import About from "./module/About/container/About";
import Frontpage from "./module/Home/container/Frontpage";
import Sanctuary from "./module/Sanctuary/component/sanctuary";
import ContactUs from "./module/ContactUs/ContactUs"
import Footer from "./Footer"
import StepTwoForm from "./module/LandingPage/container/StepTwoForm";
// import { Dashboard } from "@mui/icons-material";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Frontpage />} />
        <Route path="/Frontpage" element={<Frontpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/StepTwoForm" element={<StepTwoForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/sanctuary" element={<Sanctuary />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;

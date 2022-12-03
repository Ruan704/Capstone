import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./module/Navbar/Navbars";
import Front from "./module/LandingPage/container/Front";
import AboutComponent from "./module/About/container/AboutComponent";
import Frontpage from "./module/Home/container/Frontpage";
import Sanctuary from "./module/Sanctuary/component/sanctuary";
import ContactUs from "./module/ContactUs/ContactUs"
import Footer from "./Footer"
// import StepTwoForm from "./module/LandingPage/container/StepTwoForm";
import Modal from "./module/PrivacyPolicy/Modal"
import Services from "./module/Services/Services"
import WildlifeSupporting from "./module/Services/WildlifeSupporting"
import WildlifeEducation from "./module/Services/WildlifeEducation"
import WildlifeSave from "./module/Services/WildlifeSave"
import TermsAndCondition from "./TermsAndCondition"
// import { Dashboard } from "@mui/icons-material";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Frontpage />} />
        <Route path="/Frontpage" element={<Frontpage />} />
        <Route path="/Front" element={<Front />} />
        <Route path="/overview" element={<AboutComponent />} />
        <Route path="/gallery-animal" element={<Sanctuary />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Services-WildlifeSupporting" element={<WildlifeSupporting />} />
        <Route path="/Services-WildlifeEducation" element={<WildlifeEducation />} />
        <Route path="/Services-WildlifeSave" element={<WildlifeSave />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
};

export default Routing;

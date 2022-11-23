import React from 'react';
import { Parallax, Background } from 'react-parallax';
import "./Volunteer.css";

const image1 = "https://www.happiness.com/community/uploads/monthly_2019_05/why-volunteering-is-important-benefits.jpg.978530aad1f6cf784c1ea6e6522c3741.jpg";

const inlineStyle = {
  fontSize:"105px",
  fontWeight: 'bold', 
  color: "blue",
  left:"50%",
  top:"50%",
  position: "absolute",
  padding: '20px',
  transform: "translate(-50%,-50%)"
}
function Volunteer() {
return(
 <Parallax bgImage={image1} className="parallex" style={{height:"800px"}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>Volunteer</div>
  </div>

 </Parallax>
)
}
export default Volunteer;
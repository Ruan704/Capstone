import React from 'react';
import { Parallax, Background } from 'react-parallax';
import "./About.css";

const image1 = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg";

const inlineStyle = {
  fontSize:"105px",
  fontWeight: 'bold', 
  color: "white",
  left:"50%",
  top:"50%",
  position: "absolute",
  padding: '20px',
  transform: "translate(-50%,-50%)"
}
function About() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>ABOUT</div>
  </div>

 </Parallax>
)
}
export default About;
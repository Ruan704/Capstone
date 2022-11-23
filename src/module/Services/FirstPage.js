import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://image.shutterstock.com/shutterstock/photos/1855260898/display_1500/stock-photo-a-leopard-that-jumps-fast-to-hunt-1855260898.jpg";

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

function FirstPage() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>SERVICES</div>
  </div>

 </Parallax>
)
}
export default FirstPage;
import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png";

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

function parallexTwo() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}} style={{height:"500px"}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>Wildlife Save</div>
  </div>

 </Parallax>
)
}
export default parallexTwo;
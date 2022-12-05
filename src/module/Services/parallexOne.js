import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://a2.cdn.japantravel.com/photo/20734-230849/1440x960!/kyoto-kyoto-s-wild-monkey-park-230849.jpg";

const inlineStyle = {
  fontSize:"105px",
  fontWeight: 'bold', 
  color: "white",
  left:"50%",
  top:"50%",
  position: "absolute",
  padding: '20px',
  transform: "translate(-50%,-50%)",
  fontFamily: "Baloo Bhai 2",
}

function parallexOne() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}} style={{height:"500px"}}>
  <div style={{height: "400px", textAlign:"center"}}>
    <div style={inlineStyle}>Wildlife Supporting</div>
  </div>

 </Parallax>
)
}
export default parallexOne;
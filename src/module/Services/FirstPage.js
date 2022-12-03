import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://wallpapershome.com/images/wallpapers/tiger-2560x1440-5k-4k-wallpaper-green-grass-close-nature-wild-animal-1623.jpg";

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
  <div style={{height: "500px",fontFamily: "Lato" }}>
    <div style={inlineStyle}>SERVICES</div>
  </div>

 </Parallax>
)
}
export default FirstPage;
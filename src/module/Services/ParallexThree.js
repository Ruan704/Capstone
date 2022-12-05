import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://www.awf.org/sites/default/files/styles/species_image/public/2020-04/Website_SpeciesPage_Giraffe02_Challenges.jpg?h=29c6c1f6&itok=c4O28j2u";

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

function parallexThree() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}} style={{height:"500px"}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>wildlife Education</div>
  </div>

 </Parallax>
)
}
export default parallexThree;
import { textAlign } from '@mui/system';
import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://www.facaishur.com/uploads/allimg/201209/23-2012091TTC55.jpg";

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

function parallex() {
return(
 <Parallax bgImage={image1} className="parallex" style={{height:"700px"}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>Terms And Condition</div>
  </div>

 </Parallax>
)
}
export default parallex;
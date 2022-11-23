import React from 'react';
import { Parallax, Background } from 'react-parallax';

const image1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Red_Panda_%2824986761703%29.jpg/1200px-Red_Panda_%2824986761703%29.jpg";

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

function parallex4() {
return(
 <Parallax bgImage={image1} className="parallex" blur={{min:-1, max:2}} style={{height:"700px"}}>
  <div style={{height: "500px"}}>
    <div style={inlineStyle}>Contact</div>
  </div>

 </Parallax>
)
}
export default parallex4;
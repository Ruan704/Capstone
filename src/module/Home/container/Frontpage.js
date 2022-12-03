import React, { Component } from "react";
import Home from "./Home.js";
import WildlifeThreat from "./WildlifeThreats.js";
import Youtube from "./youtube.js";
import Stack1 from "./stack1.js";
import Stack2 from "./stack2.js";
import Stack3 from "./stack3.js";
import Stack4 from "./stack4.js"
import News from "./News.js"
class Frontpage extends Component {
  render() {
    return (
      <div>
        <Home />
        <br></br>
        <p style={{textAlign: 'center',alignItems:"center", width: '100%',fontSize: "30px", color:"#7D8F69", fontFamily:"Lato"}}>
          The Protecting Wildlife program is one of Singapore largest wildlife protection organisation, delivering <br></br> and influencing
          effective conservation platform for more than 10 million people in Singapore.
        </p>
        <br></br>
        <Youtube videoId='Tss6HtHlLuw'/>
        <br></br>
        <Stack1/>
        <br></br>
        <Stack2/>
        <br></br>
        <Stack3/>
        <br></br>
        <Stack4/>
        <News/>
      </div>
    );
  }
}
export default Frontpage;

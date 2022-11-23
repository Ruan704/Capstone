import React, { Component } from "react";
import Home from "./Home.js";
import WildlifeThreat from "./WildlifeThreats.js";
import Youtube from "./youtube.js";
class Frontpage extends Component {
  render() {
    return (
      <div>
        <Home />
        <br></br>
        <p style={{textAlign: 'center',alignItems:"center", width: '100%',fontSize: 20, color:"brown"}}>
          The Protecting Wildlife program is one of Singapore largest wildlife protection organisation, delivering <br></br> and influencing
          effective conservation platform for more than 10 million people in Singapore.
        </p>
        <br></br>
        <Youtube videoId='Tss6HtHlLuw'/>
        <br></br>
        {/* <HomeCard /> */}
        <div style={{textAlign: 'center',alignItems:"center",fontSize:"30px"}}>Biggest Threats To Wildlife</div>
        <br></br>
        <WildlifeThreat/>
      </div>
    );
  }
}
export default Frontpage;

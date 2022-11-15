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
          The World Wide Fund for Nature (formerly World Wildlife Fund (WWF))
          aims to conserve nature and ecological processes by preserving
          biodiversity, ensuring sustainable use of natural resources and
          promoting the reduction of pollution and wasteful use of resources and
          energy.
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

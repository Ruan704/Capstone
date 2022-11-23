import React from "react";
import lifewil from "../src/images/services-lifewil-2.jpg";
// ../images/
const Body3 = () => {
  return (
    <div className="Body3" style={{ fontSize: "45px", fontWeight: "bold" }}>
      <p style={{ fontSize: "35px", fontWeight: "bold", color: "#996600" }}>
        Terms And Condition
      </p>

      <div className="first">
        <div className="des-text" style={{textAlign:"center"}}>
          <p style={{ fontSize: "20px", fontWeight: "bold",  marginLeft: '200px',textAlign:"center" }}>
            Welcome to the Wildlife Protection Terms of Service (“Terms”). This is
            a legal agreement between you and Wildlife Studios Limited, an Irish
            corporation (“Wildlife”), regarding the Services you use from us.
            “Services” means collectively, and sometimes individually, the
            following: (a) each of our Games, and (b) any websites, software or
            other services we provide with or in support of a Game, whether or
            not they are installed or used on a computer, console, or a mobile
            device. “Game” means our game that you download and access that is
            subject to these Terms, regardless of where you download and/or
            access it, and any documentation, software, updates, Virtual Goods
            and Content (each defined below) included in it.
          </p>
        </div>
        <div className="images">
          <img
            alt="img"
            src={lifewil}
            style={{ width: "400px", height: "600px", marginRight: '200px' }}
          />
        </div>
      </div>
    </div>
  );
};
export default Body3;

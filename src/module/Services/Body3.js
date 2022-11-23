import React from "react";
import lifewil from "../../images/services-lifewil-4.jpg";

const Body3 = () => {
  return (
    <div className="Body3" style={{ fontSize: "45px", fontWeight: "bold" }}>
      <h1 style={{textAlign:"center"}}>About Wildlife Education</h1>
      <p style={{ fontSize: "35px", fontWeight: "bold", color: "#996600" }}>
        CHARTING A CHANGING HABITAT
      </p>

      <div className="first">
        <div className="des-text" style={{textAlign:"center", display: "inline",  marginLeft: '250px'}}>
          <p style={{ fontSize: "20px", fontWeight: "bold",display:"inline" }}>
            Mother Nature is a great teacher. Our parks are where learning truly
            transcends the four walls. As students tour our grounds, they’ll
            come face to face with the fragility of wildlife but at the same
            time, witness all its wonders. From interdisciplinary trails,
            enrichment programmes, to overnight camps and behind-the-scenes
            tours, our dynamic and interactive in-park activities are set to
            enliven your learning experience of the natural world that surrounds
            us.
          </p>
        </div>
        <div className="images">
          <img
            alt="img"
            src={lifewil}
            style={{ width: "400px", height: "600px", marginRight: '150px'  }}
          />
        </div>
      </div>
    </div>
  );
};
export default Body3;

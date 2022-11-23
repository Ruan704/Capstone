import React from "react";
import lifewil from "../../images/services-lifewil-5.jpg";

const AboutWildlife = () => {
  return (
    <div className="aboutwildlife">
      <h1 style={{ textAlign: "center" }}>About Wildlife Save</h1>
      <p style={{ fontSize: "35px", fontWeight: "bold", color: "#996600" }}>
        CHARTING A CHANGING HABITAT
      </p>

      <div className="first">
        <div className="des-text">
          <p
            style={{ fontSize: "20px", fontWeight: "bold", display: "inline",textAlign:"center", marginLeft: '200px' }}
          > 
            One of the easiest and most effective ways to help wildlife is to
            preserve the environment in which the animals live. Volunteer with
            organizations in your area to restore native forests, grasslands,
            and coastal ecosystems by planting native species, manually removing
            invasive plant species, and taking out old fences.
          </p>
        </div>
        <div className="images">
          <img
            alt="img"
            src={lifewil}
            style={{ width: "400px", height: "600px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutWildlife;

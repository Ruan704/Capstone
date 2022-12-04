import React from "react";
import lifewil from "../../images/services-lifewil-6.jpg";

const AboutWildlife = () => {
  return (
    <div className="aboutwildlife">
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "green",
          textAlign: "center",
          fontFamily: "Baloo Bhai 2",
        }}
      >
        About Wildlife Supporting
      </h1>

      <div className="first">
        <div className="des-text">
      <p style={{ fontSize: "35px", fontWeight: "bold", color: "#996600" }}>
        CHARTING A CHANGING HABITAT
      </p>

      <div className="first">
        <div className="des-text">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: "inline",
              fontFamily: "Baloo Bhai 2",
            }}
          >
            The first step towards inspiring children to do their part for
            wildlife conservation is to connect them to the natural world.
            Adopt-An-Animal School Edition is designed to empower children to be
            wildlife champions as well as to encourage collaborative team
            efforts and creative thinking. Adopt-An-Animal School Edition also
            makes available resources and experiences relating to conservation
            and sustainability to support teachers in facilitating extended
            learning opportunities.
          </p>
        </div>
        <div className="images">
          <img
            alt="img"
            src={lifewil}
            style={{ width: "500px", height: "600px", marginRight: "-800px" }}
          />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
export default AboutWildlife;

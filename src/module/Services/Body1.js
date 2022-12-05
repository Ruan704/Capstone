import React from "react";
import lifewil from "../../images/monkey.png";

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

      <div className="first"
       style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <div className="des-text" style={{ width: "500px" }}>
      <p style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#996600",
              fontFamily: "Baloo Bhai 2",
            }}>
        CHARTING A CHANGING HABITAT
      </p>
      <br></br>
      <br></br>
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
            style={{marginRight: "100px" ,maxWidth:"500px"}}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutWildlife;

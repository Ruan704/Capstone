import React from "react";
import lifewil from "../../../images/lifewil-about.png";
import "./AboutWildlife.css";
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
        About Wildlife Protection
      </h1>

      <div className="first" style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <div className="des-text" style={{ width: "500px" }}>
          <p
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#996600",
              fontFamily: "Baloo Bhai 2",
            }}
          >
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
            As the world’s leading conservation organization, Our teams works in
            nearly 100 countries to tackle the most pressing issues at the
            intersection of nature, people, and climate. We collaborate with
            local communities to conserve the natural resources we all depend on
            and build a future in which people and nature thrive. Together with
            partners at all levels, we transform markets and policies toward
            sustainability, tackle the threats driving the climate crisis, and
            protect and restore wildlife and their habitats.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={lifewil} style={{ marginRight: "100px" }} />
        </div>
      </div>
    </div>
  );
};
export default AboutWildlife;

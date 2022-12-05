import React from "react";
import lifewil from "../../images/giraffe.png";

const Body3 = () => {
  return (
    <div className="Body3" style={{ fontSize: "45px", fontWeight: "bold" }}>
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          color: "green",
          textAlign: "center",
          fontFamily: "Baloo Bhai 2",
        }}
      >
        About Wildlife Education
      </h1>
      <div
        className="first"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <div
          className="des-text"
          style={{  paddingLeft:"300px"}}
        >
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
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: "inline",
              fontFamily: "Baloo Bhai 2",
            }}
          >
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
            style={{ marginRight: "100px", maxWidth: "500px" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Body3;

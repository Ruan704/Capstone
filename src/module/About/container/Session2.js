import React from "react";
import data from "./data1";
import "./Session2.css";

const Session2 = () => {
  return (
    <>
      <section className="branding">
        <div className="container grid" id="sta">
          {data.stastics.map((value) => {
            return (
              <div className="box flex" style={{maxWidth: "200px"}}>
                <div className="text">
                  <h1 style={{ fontFamily: "'Baloo Bhai 2', cursive" }}>
                    {value.number}
                  </h1>
                </div>
                <div className="para">
                  <h2 style={{ fontFamily: "'Baloo Bhai 2', cursive" }}>
                    {value.strDescription}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Session2;

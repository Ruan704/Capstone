import React from 'react'
import lifewil from "../../../images/services-lifewil-1.jpg"
const Vision = () => {
    return (
      <div className="aboutwildlife">
        <h1 style={{textAlign: "center"}}>VISION</h1>
        <div className="first">
          <div className="des-text">
            <p style={{fontSize:"20px", fontWeight: 'bold', marginLeft: "300px", fontFamily: "'Baloo Bhai 2', cursive" }}>
           View a different world with different perspective of eye.
            </p>
          </div>
          <div className="image">
           <img alt="img" src={lifewil} style={{width:"300px",height:"400px", marginLeft:"300px"}}/>
          </div>
        </div>
      </div>
    );
  };
  export default Vision;
  
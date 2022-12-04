import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import volunteer from "../../../images/volunteering.jpg";
import image2 from "../../../images/wildlife3.jpg";
import image1 from "../../../images/wildlife4.jpg";
import "./Home.css";
import "./stack3.css";
function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={{ height: "500px", width: "900px",  objectFit: "cover" }}
        />
           <div class="container">
          <div class = "box">
            
        <Carousel.Caption
          style={{
            // color: "#557153",
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Baloo Bhai 2",
            color: "#C147E9",
            paddingLeft: "300px",
            paddingTop: "400px",
            // color: "#E6E5A3CC"
           
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
              height: "150px",
              width:"700px",
              top: "50%",
              left: "50%",
              backgroundColor: "#E6E5A3CC",
              font: "Baloo Bhai 2", 
              boxShadow: "5px 10px #735F32"
            }}
          >
            Welcome to World Wildlife Protection (WWP). WWP works in unity with
            many to achieve lasting conservation results. Together, we can
            protect and restore species and their habitats.
          </p>
        </Carousel.Caption>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
          style={{ height: "500px", width: "900px", objectFit: "cover" }}
        />
        <div class="container">
          <div class = "box">
        <Carousel.Caption
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Baloo Bhai 2",
            color: "#C147E9",
            paddingLeft: "300px",
            paddingTop: "400px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
              height: "150px",
              width:"700px",
              top: "50%",
              left: "50%",
              // 
              // paddingLeft: "200px",
              // paddingRight: "100px",
              // background: "white",
              backgroundColor: "#E6E5A3CC",
              font: "Baloo Bhai 2", 
              boxShadow: "5px 10px #735F32"
            }}
          >
            Service to wildlife protection
            <br></br>
            <br></br>
            At WWP we includes serveral kinds of different services such as
            contact us, FAQ and be a volunteer services
          </p>
        </Carousel.Caption>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="volunteer"
          src={volunteer}
          alt="First slide"
          style={{ height: "500px", width: "1800px",  objectFit: "cover" }}
        />
        <div class="container">
          <div class = "box">
        <Carousel.Caption
          style={{
            fontWeight: "bold",
            fontSize: "25px",
            fontFamily: "Baloo Bhai 2",
            color: "#C147E9",
            paddingLeft: "300px",
            paddingTop: "400px",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
              height: "150px",
              width:"700px",
              top: "50%",
              left: "50%",
              // 
              // paddingLeft: "200px",
              // paddingRight: "100px",
              // background: "white",
              backgroundColor: "#E6E5A3CC",
              font: "Baloo Bhai 2", 
              boxShadow: "5px 10px #735F32"
            }}
          >
            Join Our Team
            <br></br>
            <br></br>
            Wildlife conservation volunteering is the perfect conservation
            opportunity to protect endangered species from extinction.{" "}
          </p>
        </Carousel.Caption>
        </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

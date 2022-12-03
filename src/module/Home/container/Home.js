import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import volunteer from "../../../images/volunteering.jpg";
import image2 from "../../../images/wildlife3.jpg";
import image1 from "../../../images/wildlife4.jpg";
import "./Home.css";
function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={{ height: "500px", width: "900px" }}
        />
        <Carousel.Caption
          style={{ color: "#557153", fontWeight: "bold", fontSize: "25px", fontFamily:"Lato", opacity: ".5" }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#557153",
              textAlign: "center",
              height: "300px",
              paddingTop:"40px",
              paddingLeft:"40px",
              paddingRight:"40px",
              background:"white",
              font:"Lato"
            }}
          >
            Welcome to World Wildlife Protection (WWP). WWP works in unity with
            many to achieve lasting conservation results. Together, we can
            protect and restore species and their habitats.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
          style={{ height: "500px", width: "900px" }}
        />
        <Carousel.Caption
          style={{ color: "#557153", fontWeight: "bold", fontSize: "25px", fontFamily:"Lato", opacity: ".5" }}
        >
          <h5
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#557153",
              textAlign: "center",
              height: "300px",
              paddingTop:"40px",
              paddingLeft:"40px",
              paddingRight:"40px",
              background:"white",
              font:"Lato"
            }}
          >
            Service to wildlife protection
            <br></br><br></br>
            At WWP we includes serveral kinds of different services such as contact us, FAQ and be a volunteer services
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="volunteer"
          src={volunteer}
          alt="First slide"
          style={{ height: "500px", width: "1500px" }}
        />
        <Carousel.Caption 
        style={{ color: "white",opacity: ".5", color: "#557153", fontFamily:"Lato" }}>
          <h5
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "#557153",
              textAlign: "center",
              height: "300px",
              paddingTop:"40px",
              paddingLeft:"40px",
              paddingRight:"40px",
              background:"white",
              font:"Lato"
            }}
          >
            Join Our Team 
            <br></br><br></br>
            Wildlife conservation volunteering is the
            perfect conservation opportunity to protect endangered species from
            extinction.{" "}
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

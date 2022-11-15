import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import volunteer from "../../../images/volunteers1.png";
import image1 from "../../../images/event-wildlife-1.jpg";
import image2 from "../../../images/event-wildlife-2.jpg";
import "./Home.css";
function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>  
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
      <Carousel.Caption style={{color:"white",fontWeight: 'bold' , fontSize:"25px"}}>
          <p style={{fontWeight: 'bold' , fontSize:"25px"}}>
           Welcome to World Wildlife Fund (WWF)
          </p>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption style={{color:"white",fontWeight: 'bold' , fontSize:"25px"}}>
          <h5 style={{fontWeight: 'bold' , fontSize:"25px"}}>Service to wildlife protection</h5>
          <p >Learn more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
         <img
          className="d-block w-100"
          src={volunteer}
          alt="First slide"
          style={{width:"100px",height:"500px"}}
        />
        <Carousel.Caption style={{color:"white"}}>
          <h5 style={{fontWeight: 'bold' , fontSize:"25px"}}>Join Our Team</h5>
          <p>Learn More</p>
        </Carousel.Caption> 
      </Carousel.Item>
  </Carousel>
   );
 }

 export default Home;
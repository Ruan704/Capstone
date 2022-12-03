import React, { Component } from 'react'
import "./News.css"
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
class News extends Component{
  render(){
    return(
      <>
      <div className='text-img'>
<Container style={{ backgroundColor: "#E6E5A3" }}>
        <div class="news" style={{ color: "green" }}>
          <h2
            style={{ fontSize: "45px", color: "#557153", textAlign: "center", fontFamily:"Lato" }}
          >
            Sign Up for Our Updates
          </h2>
          <div id="searchbox">
            <form action="#">
          <div class="form-box">
            <input
              id="email"
              label="Email Address"
              name="email"
              type="text"
              placeholder="Enter Email"
              style={{
                fontSize: "20px",
                width: "300px",
                height: "100px",
                backgroundColor: "transparent",
                margin: "auto",
                marginLeft: "500px",
              }}
            />
          
          <br></br>
          <br></br>
          <Button
            // data-testid="button-up"
            type="submit"
            variant="contained"
            className="btn"
            // sx={{ mt: 3, mb: 2 }}
            style={{
              width: "250px",
              height: "50px",
              fontSize: "20px",
              marginLeft: "500px",
            }}
          >
            <span style={{ fontSize: "20px" }}>SIGN UP</span>
          </Button>
        </div>
        </form>
        </div>
        </div>
      </Container>
      </div>
      </>
    )
  }
}
export default News
import React, { Component } from "react";
import "./News.css";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
class News extends Component {
  constructor() {
    super();
    this.state = {
      isUserSubscribed: false,
    };
  }

  render() {
    return (
      <>
        <div className="text-img">
          <Container style={{ backgroundColor: "#E6E5A3" }}>
            <div class="news" style={{ color: "green" }}>
              <h2
                style={{
                  fontSize: "45px",
                  color: "#557153",
                  textAlign: "center",
                  fontFamily: "Lato",
                }}
              >
                Sign Up for Our Updates
              </h2>
              <div id="searchbox">
                <form action="#">
                  <div class="form-box">
                    {this.state.isUserSubscribed ? (
                      <h3>Thank you!</h3>
                    ) : (
                      <>
                        <div class="box-left">
                          <input
                            id="email"
                            label="Email Address"
                            name="email"
                            type="text"
                            placeholder="Enter Email"
                            style={{
                              fontSize: "20px",
                              width: "300px",
                              height: "50px",
                              backgroundColor: "transparent",
                              margin: "auto",
                            }}
                          />
                        </div>
                        <div class="box-right">
                          <Button
                            // data-testid="button-up"
                            variant="contained"
                            className="btn"
                            // sx={{ mt: 3, mb: 2 }}
                            style={{
                              width: "250px",
                              height: "50px",
                              fontSize: "20px",
                            }}
                            onClick={() => {
                              this.setState({
                                isUserSubscribed: true,
                              });
                            }}
                          >
                            <span style={{ fontSize: "20px" }}>SIGN UP</span>
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}
export default News;

import React, { Component } from "react";
import "./News.css";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
class News extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isUserSubscribed: false,
      emailError: "",
    };
  }
  handleChange = (e) => {
    if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
  };
  validateEmail = (email) => {
    let emailError = this.state.emailError;
    let formIsValid = this.state.formIsValid;

    if (String(email).trim() === "") {
      emailError = "*Please enter your email-ID.";
      formIsValid = false;
    } else {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (pattern.test(email)) {
        formIsValid = true;
        emailError = "";
      } else {
        emailError = "*Please enter valid email-ID.";
        formIsValid = false;
      }
    }

    this.setState({
      email,
      emailError,
      formIsValid,
    });
    return formIsValid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateEmail(this.state.email)
    ) {
      //to add the data push the data inside the reducer once the user
      //click on handlesubmit
      //string value
      //reason of using slice because id generated is huge so slice to use first 8 only.
      const unique_id = uuid().slice(0, 8); //'fygdyegu-fiufififo'

      //send data-class based
      //pass the id which is unique id.
      //before sending the object includes it in the state.
      this.props.onAddQuery({ ...this.state, id: unique_id });
      let email = "";
      let emailError = "";

      this.setState({
        email: email,
        emailError: emailError,
      });
    }
  };
  render() {
    return (
      <>
        <div className="text-img">
          <Container style={{ backgroundColor: "#E6E5A3" }}>
            <div class="news" style={{ color: "green" }}>
              <h2
                style={{
                  fontSize: "40px",
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
                            value={this.state.email}
                    onChange={this.handleChange}
                            placeholder="Enter Email"
                            style={{
                              fontSize: "20px",
                              width: "300px",
                              height: "50px",
                              backgroundColor: "transparent",
                              margin: "auto",
                              fontFamily:"Lato",
                            }}
                          />
                          <p style={{ color: "red" , fontSize: "15px" , fontFamily:"Lato"}}>{this.state.emailError}</p>
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
                              marginLeft: "25px",
                              fontFamily:"Lato",
                              backgroundColor: "#f4a460"
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

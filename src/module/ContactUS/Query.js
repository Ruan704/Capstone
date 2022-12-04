import React, { Component } from "react";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
//generate unique id everytime (this is especially useful when u want to post data)
import { v4 as uuid } from "uuid";
import "./Query.css";
import { connect } from "react-redux";
import { onAddContactData } from "../../action";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
class Query extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formIsValid: false,
      nameError: "",
      emailError: "",
      subjectError: "",
      messageError: "",
    };
  }
  handleChange = (e) => {
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id == "subject") {
      this.validateSubject(e.target.value);
    }
    if (e.target.id == "message") {
      this.validateMessage(e.target.value);
    }
  };

  validateName = (name) => {
    let nameError = this.state.nameError;
    let formIsValid = this.state.formIsValid;
    var patterns = new RegExp(/[^a-zA-Z]/);
    if (String(name).trim() === "") {
      nameError = "*Please enter your Name.";
      formIsValid = false;
    } else if (patterns.test(name)) {
      formIsValid = false;
      nameError = "Please enter valid Name";
    } else {
      nameError = "";
      formIsValid = true;
    }
    this.setState({
      name,
      nameError,
      formIsValid,
    });
    return formIsValid;
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

  validateSubject = (subject) => {
    let subjectError = this.state.subjectError;
    let formIsValid = this.state.formIsValid;
    if (String(subject).trim() === "") {
      subjectError = "*Please enter your subject.";
      formIsValid = false;
    } else {
      subjectError = "";
      formIsValid = true;
    }
    this.setState({
      subject,
      subjectError,
      formIsValid,
    });
    return formIsValid;
  };

  validateMessage = (message) => {
    let messageError = this.state.messageError;
    let formIsValid = this.state.formIsValid;
    var patterns = new RegExp(/^[a-z]{0,500}$/);
    if (String(message).trim() === "") {
      messageError = "*Please enter your message.";
      formIsValid = false;
    } else {
      messageError = "";
      formIsValid = true;
    }
    this.setState({
      message,
      messageError,
      formIsValid,
    });
    return formIsValid;
  };

  //when user press submit send data from handle submit and store in setState.
  //setState -> enqueues changes to the component state and tells React that this
  // component and its children need to be re-rendered with the updated state.
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validateEmail(this.state.email) &&
      this.validateSubject(this.state.subject) &&
      this.validateMessage(this.state.message)
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

      let name = "";
      let email = "";
      let subject = "";
      let message = "";
      let nameError = "";
      let emailError = "";
      let messageError = "";
      let subjectError = "";

      this.setState({
        name: name,
        email: email,
        message: message,
        subject: subject,
        NameError: nameError,
        emailError: emailError,
        subjectError: subjectError,
        messageError: messageError,
      });
    }
  };

  render() {
    return (
      <div className="container" >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Baloo Bhai 2",
            
          }}
        >
          Contact Us
        </h2>
        <h3
          style={{
            textAlign: "center",
            fontSize: "25px",
            fontFamily: "Baloo Bhai 2",
            
          }}
        >
          We would like to hear from your question and <br></br> help us success{" "}
          Feel free to get in touch with <br></br>us
        </h3>
        <Container
          component="main"
          maxWidth="lg"
          style={{ marginTop: "20px" }}
        >
  <CssBaseline />
{/* , marginLeft: "200px" */}
          <div className="contact-box" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
        {/* </Container> */}
        {/* <div className="contact-box" maxWidth="lg"
      style={{ marginTop: "20px" }}> */}
          <div className="contact-left" style={{maxWidth: "500px"}}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
                fontFamily: "Baloo Bhai 2",
                color: "#f4a460",
              }}
            >
              Send your request
            </h3>
            <form>
              <div class="input-row">
                <div class="input-group">
                  <label
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                    }}
                  >
                    Name:{" "}
                  </label>
                  <input
                    id="name"
                    label="Enter Name"
                    name="name"
                    type="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Please enter your name"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  />
                </div>
                <p style={{ color: "red", fontSize: "15px" }}>
                  {this.state.nameError}
                </p>
                <br></br>
                <div class="input-group">
                  <label
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                    }}
                  >
                    Email:{" "}
                  </label>
                  <input
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  >
                    {this.state.emailError}
                  </p>
                </div>
                <br></br>
                <div class="input-group">
                  <label
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  >
                    Subject:{" "}
                  </label>
                  <input
                    id="subject"
                    label="subject"
                    name="subject"
                    type="subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                    placeholder="Enter subject"
                    style={{ fontSize: "20px" }}
                  />
                  <p
                    style={{
                      color: "red",
                      fontSize: "15px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  >
                    {this.state.subjectError}
                  </p>
                  <br></br>
                </div>
                <br></br>

                <label
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  label="Message Entered"
                  name="message"
                  type="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder="Enter Message Here"
                  style={{
                    width: "600px",
                    height: "300px",
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  {this.state.messageError}
                </p>
                <br></br>

                {/* <p style={{color:maroon}} >{email.error}</p> */}
                <Button
                  // data-testid="button-up"
                  type="submit"
                  variant="contained"
                  className="btn"
                  // sx={{ mt: 3, mb: 2 }}
                  onClick={this.handleSubmit}
                  style={{
                    width: "200px",
                    height: "50px",
                    margin: "auto",
                    marginLeft: "200px",
                    fontSize: "15px",
                    fontFamily: "Baloo Bhai 2",
                    backgroundColor: "#f4a460",
                    borderRadius: "25px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  >
                    Contact Us
                  </span>
                </Button>
              </div>
            </form>
          </div>
          <div className="contact-right" style={{maxWidth: "500px",height:"800px", marginLeft:"170px"}}>
            <h3>Reach Us</h3>
            <table>
              <tr>
                <td style={{ fontSize: "20px" }}>
                  <EmailIcon fontSize="large" />
                  &nbsp;&nbsp;Email:&nbsp;
                </td>
                <td
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  WLP@gmail.com
                </td>
              </tr>
              <br></br>

              <tr>
                <td style={{ fontSize: "20px" }}>
                  <ContactPhoneIcon fontSize="large" />
                  &nbsp;&nbsp;&nbsp;Phone:&nbsp;
                </td>
                <td
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  +65 6438 8900
                </td>
              </tr>
              <br></br>

              <br></br>
              <br></br>
              <tr>
                <td style={{ fontSize: "20px", marginLeft: "300px" }}>
                  <LocationOnIcon fontSize="large" />
                  &nbsp;&nbsp;&nbsp;Address:&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td
                  style={{
                    fontSize: "20px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  4 Shenton Way No 01-01 SGX <br></br> Centre 2 068807 Singapore{" "}
                </td>
              </tr>
            </table>
          </div>
        {/* </div> */}</div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};

// const ma
//creating structure to displatch(派遣)
//send the data when the data was being submitted.
const mapDispatchToProps = (dispatch) => {
  //onAddData was implemented in the action file.
  return {
    //whatever data receving it will recevive as argument.
    onAddQuery: (item) => dispatch(onAddContactData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);

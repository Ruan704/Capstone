import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Form } from "react-bootstrap";
//generate unique id everytime (this is especially useful when u want to post data)
import {v4 as uuid} from 'uuid';
import "./Query.css";
import { connect } from "react-redux";
import { onAddContactData } from "../../action";

class Query extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      formIsValid: false,
      nameError: "",
      emailError: "",
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

  validateMessage = (message) => {
    let messageError = this.state.messageError;
    let formIsValid = this.state.formIsValid;
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
      let message = "";
      let nameError = "";
      let emailError = "";
      let messageError = "";

      this.setState({
        name: name,
        email: email,
        message: message,
        NameError: nameError,
        emailError: emailError,
        messageError: messageError,
      });
    }
  };

  render() {
    return (
      <>
        <>
          <div className="contact-heading">
            <h2>Contact Us</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="icon">
                  <i>
                    <LocationOnIcon fontSize="large" />
                  </i>
                </div>
                <div className="contact-widget-item">
                  <div className="text">
                    <h5>Address</h5>
                    <p>River Wonders 80 Mandai Lake Rd, Singapore 729826</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <i>
                      <ContactPhoneIcon fontSize="large" />
                    </i>
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>+65-62693411</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <br></br>
                  <div className="icon">
                    <i>
                      <EmailIcon fontSize="large" />
                    </i>
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>WWF@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wrapper">
            <Container
              component="main"
              maxWidth="xs"
              style={{ marginTop: "20px" }}
            >
              <div class="input_field">
                <TextField
                  id="name"
                  label="Enter Name"
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Please enter your name"
                />
                <p style={{ color: "red" }}>{this.state.nameError}</p>
              </div>

              <br></br>
              <br></br>
              <div class="input_field">
                <TextField
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                />
                <p style={{ color: "red" }}>{this.state.emailError}</p>
              </div>
              <br></br>
              <br></br>

              <div class="input_field">
                <TextField
                  id="message"
                  label="Message Entered"
                  name="message"
                  type="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  placeholder="Enter Message Here"
                />
                <p style={{ color: "red" }}>{this.state.messageError}</p>
              </div>
              <br></br>
              <br></br>
              <Button
                type="submit"
                variant="contained"
                className="btn"
                // sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
              >
                Contact Us
              </Button>

              {contact.length ? (<Display contactData={this.props.contact} />) : ('') }
              
            </Container>
          </div>
        </>
        <br></br>
        {/* <div className="row">
          <div className="map-column">
            <div className="contact-map">
              <iframe
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=wildlife resorve&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    contact: state.contact
  };
};

// const ma
//creating structure to displatch(派遣)
//send the data when the data was being submitted.
const mapDispatchToProps = (dispatch) =>{
  //onAddData was implemented in the action file.
  return{
    //whatever data receving it will recevive as argument.
    onAddQuery: (item) => dispatch(onAddContactData(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);

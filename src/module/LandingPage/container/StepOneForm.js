import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import { onAddData } from "../../../action";
import "./StepOneForm.css";

class StepOneForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      email: "",
      contact: "",
      national: "",
      formIsValid: false,
      nameError: "",
      genderError: "",
      emailError: "",
      contactError: "",
      nationalError: "",
    };
  }

  handleChange = (e) => {
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id == "gender") {
      this.validateGender(e.target.value);
    }
    if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
    if (e.target.id == "contact") {
      this.validateContact(e.target.value);
    }
    if (e.target.id = "national") {
      this.validateNational(e.target.value);
    }
  };

  validateName = (name) => {
    let nameError = this.state.nameError;
    let formIsValid = this.state.formIsValid;
    var patterns = new RegExp(/[^a-zA-Z]/);
    if (String(name).trim() === "") {
      nameError = "*Please enter your name.";
      formIsValid = false;
    } else if (patterns.test(name)) {
      formIsValid = false;
      nameError = "Please enter valid name";
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

  validateGender = (gender) => {
    let genderError = this.state.genderError;
    let formIsValid = this.state.formIsValid;
    if (String(gender).trim() === "") {
      genderError = "*Please enter your gender.";
      formIsValid = false;
    } else if (!(gender == "male" || gender == "female")) {
      genderError = "*Please enter only male or female.";
      formIsValid = false;
    } else {
      genderError = "";
      formIsValid = true;
    }
    this.setState({
      gender,
      genderError,
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


  validateContact = (contact) => {
    let contactError = this.state.contactError;
    let formIsValid = this.state.formIsValid;
    var pattern = new RegExp(/^[0-9]/);
    if (String(contact).trim() === "") {
      contactError = "*Please enter your contact.";
      formIsValid = false;
    } else if (!pattern.test(contact)) {
      formIsValid = false;
      contactError = "Please enter valid contact";
    } else {
      contactError = "";
      formIsValid = true;
    }
    this.setState({
      contact,
      contactError,
      formIsValid,
    });
    return formIsValid;
  };

  validateNational = (national) => {
    let nationalError = this.state.nationalError;
    let formIsValid = this.state.formIsValid;
    if (String(national).trim() === "") {
      nationalError = "*Please enter your national.";
      formIsValid = false;
    } else if (!(national == "Singaporean" || national == "non-Singaporean")) {
      formIsValid = false;
      nationalError = "Please enter either Singaporean or non-Singaporean";
    } else {
      nationalError = "";
      formIsValid = true;
    }
    this.setState({
      national,
      nationalError,
      formIsValid,
    });
    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validateGender(this.state.gender) &&
      this.validateEmail(this.state.email) &&
      this.validateContact(this.state.contact) &&
      this.validateNational(this.state.national)
    ) {
      // console.log(uuid());
      //string value
      const unique_id = uuid().slice(0, 8); //'fygdyegu-fiufififo'

      //send data-class based
      this.props.onAddItem({ ...this.state, id: unique_id });

      let name = "";
      let gender = "";
      let email = "";
      let contact = "";
      let national = "";
      let nameError = "";
      let genderError = "";
      let emailError = "";
      let contactError = "";
      let nationalError = "";

      this.setState({
        name: name,
        gender: gender,
        email: email,
        contact: contact,
        national: national,
        nameError: nameError,
        genderError: genderError,
        emailError: emailError,
        contactError: contactError,
        nationalError: nationalError,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div style={{ fontSize: "20px" }}>Name:</div>
            <Grid item xs={12}>
            <input
              id="name"
              label="Enter Name"
              name="name"
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Please enter your name"
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "red" }}>{this.state.nameError}</p>
          </Grid>

          <Grid item xs={12}>
            <label style={{ fontSize: "20px" }}>Gender: </label>
            <input
              id="gender"
              label="Enter Gender"
              name="gender"
              type="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              placeholder="Please enter your Gender"
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "red", fontSize: "15px" }}>
              {this.state.genderError}
            </p>
          </Grid>

          <Grid item xs={12}>
            <label style={{ fontSize: "20px" }}>Email: </label>
            <input
              id="email"
              label="Enter Gender"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Please enter your email"
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "red", fontSize: "15px" }}>
              {this.state.emailError}
            </p>
          </Grid>

          <Grid item xs={12}>
            <label style={{ fontSize: "20px" }}>Contact: </label>
            <input
              id="contact"
              label="Enter contact"
              name="contact"
              type="contact"
              value={this.state.contact}
              onChange={this.handleChange}
              placeholder="Please enter your contact"
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "red", fontSize: "15px" }}>
              {this.state.contactError}
            </p>
          </Grid>

          <div style={{fontSize:"15px",marginLeft: "150px"}}>
            * Please submit your form if u are not a Singaporean, else please go to the next
            page and enter your NRIC if you are Singaporean. Thanks<br></br>
          </div>


          <Button
                  type="submit"
                  variant="contained"
                  className="btn"
                  // sx={{ mt: 3, mb: 2 }}
                  onClick={this.handleSubmit}
                  style={{marginBottom: '200px', margin: "auto"}}
                >
                  Submit Us
                </Button>
                </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employee: state.employee,
  };
};

//created inside the action file
const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => dispatch(onAddData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOneForm);



import React, { Component } from "react";
// import DisplayJoin from '../component/DisplayJoin'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import image from "../../../images/picture.jpg";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material/";

export class FormDetail extends Component {
  constructor() {
    super();
    this.state = {
      formDetailError: "",
    };
  }

  continue = (event) => {
    let nameError = this.props.values.nameError;
    let emailError = this.props.values.emailError;
    let contactError = this.props.values.contactError;
    let name = this.props.values.name;
    let email = this.props.values.email;
    let contact = this.props.values.contact;
    let nationality = this.props.values.nationality;
    alert(name+email+contact+nationality)

    event.preventDefault();

    if (name.length != 0 && email.length != 0 && !isNaN(contact) ) {
      if (
        name.length &&
        email.length &&
        contact.length && nationality
      ) {

        this.props.nextStep();
      }
    } else {
      this.setState({
        formDetailError: "Please Enter All Details before going next",
      });
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Container
          component="main"
          maxWidth="lg"
          style={{ marginTop: "20px" }}
        >
          <CssBaseline />
          <div className="contact-box" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
            <div className="contact-left" style={{maxWidth: "500px"}}>
              <form>
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "Baloo Bhai 2",
                    color: "#f4a460"
                  }}
                >
                  Join Our Volunteer Team
                </h2>
                <div class="input-row">
                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        color: "#f4a460"
                      }}
                    >
                      Name:{" "}
                    </label>
                    <input
                      margin="normal"
                      required
                      fullWidth
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Please enter your name here"
                      defaultValue={values.name}
                      onChange={handleChange("name")}
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.nameError}
                    </p>
                  </div>
                  <div class="input-group" style={{display: "flex", flexDirection: "column"}}>
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        color: "#f4a460"
                      }}
                    >
                      Nationality:{" "}
                    </label>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", fontSize: "20px", fontWeight: "normal"}}>
                    <input type="radio" id="nationality" name="nationality" value="Singaporean" onClick={handleChange("nationality")}/>
                    <label for="singaporean">Singaporean</label>
                    <input type="radio" id="nationality" name="nationality" value="Foreigner" onClick={handleChange("nationality")}/>
                    <label for="foreigner">Foreigner</label>
                    </div>
                  </div>
                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        color: "#f4a460"
                      }}
                    >
                      Email:{" "}
                    </label>
                    <input
                      margin="normal"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Please enter your email"
                      defaultValue={values.email}
                      onChange={handleChange("email")}
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.emailError}
                    </p>
                  </div>

                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        color: "#f4a460"
                      }}
                    >
                      Number:{" "}
                    </label>
                    <input
                      margin="normal"
                      required
                      fullWidth
                      id="contact"
                      name="contact"
                      placeholder="Contact No."
                      defaultValue={values.contact}
                      onChange={handleChange("contact")}
                      autoFocus
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.contactError}
                    </p>
                  </div>

                  <br></br>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={this.continue}
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
                    {values.nationality !== 'Singaporean'? "Submit" :"Continue"}
                  </Button>

                  {values.formIsValid ? null : (
                    <p style={{ color: "green", fontSize: "15px" }}>
                      {this.state.formDetailError}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="contact-right" style={{maxWidth: "500px"}}>
              <h3>Reach Us</h3>
              <table>
                <tr>
                  <td style={{ fontSize: "20px" }}>
                    <EmailIcon fontSize="large" />
                    &nbsp;&nbsp;Email:&nbsp;
                  </td>
                  <td style={{ fontSize: "20px" }}>WLP@gmail.com</td>
                </tr>
                <br></br>

                <tr>
                  <td style={{ fontSize: "20px" }}>
                    <ContactPhoneIcon fontSize="large" />
                    &nbsp;&nbsp;&nbsp;Phone:&nbsp;
                  </td>
                  <td style={{ fontSize: "20px" }}>+65 6438 8900</td>
                </tr>
                <br></br>

                <br></br>
                <br></br>
                <tr>
                  <td style={{ fontSize: "20px", marginLeft: "300px" }}>
                    <LocationOnIcon fontSize="large" />
                    &nbsp;&nbsp;&nbsp;Address:&nbsp;&nbsp;&nbsp;&nbsp;
                  </td>
                  <td style={{ fontSize: "20px" }}>
                    4 Shenton Way No 01-01 SGX <br></br> Centre 2 068807
                    Singapore{" "}
                  </td>
                  <br></br>
                </tr>

              </table>
              <img
                  src={image}
                  style={{
                    width: "400px",
                    height: "200px",
                    margin: "40px"
                  }}
                />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default FormDetail;

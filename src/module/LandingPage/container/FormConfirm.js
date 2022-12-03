import React, { Component } from "react";
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
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
} from "@mui/material/";

const label = {
  inputProps: { "aria-label": "I agree to the Terms and Conditions" },
};

export class FormConfirm extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      formConfirmError: "",
    };
  }

  continue = (event) => {
    let occupationError = this.props.values.occupationError;
    let RemarkError = this.props.values.RemarkError;
    let NRICError = this.props.values.NRICError;
    let occupation = this.props.values.occupation;
    let Remark = this.props.values.remark;
    let NRIC = this.props.values.NRIC;

    event.preventDefault();
    this.props.nextStep();
  };
  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  handleClick = (event) => {
    this.setState({
      isChecked: event.target.checked,
    });
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container
          component="main"
          maxWidth="sm"
          style={{ marginTop: "20px", marginLeft: "200px" }}
        >
          <CssBaseline />

          <div className="contact-box">
            <br></br>
            <br></br>

            <div className="contact-left">
              <form>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  We would like to hear more about you
                </Typography>
                <div class="input-row">
                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        
                      }}
                    >
                      occupation:{" "}
                    </label>
                    <input
                      margin="normal"
                      required
                      fullWiddth
                      type="text"
                      id="occupation"
                      name="occupation"
                      placeholder="Please enter your occupation"
                      defaultValue={values.occupation}
                      onChange={handleChange("occupation")}
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.occupationError}
                    </p>
                  </div>

                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        
                      }}
                    >
                      NRIC:{" "}
                    </label>
                    <input
                      margin="normal"
                      required
                      fullWiddth
                      type="text"
                      id="NRIC"
                      name="NRIC"
                      placeholder="Please enter your NRIC"
                      defaultValue={values.NRIC}
                      onChange={handleChange("NRIC")}
                      style={{ fontSize: "20px" }}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.NRICError}
                    </p>
                  </div>

                  <div class="input-group">
                    <label
                      style={{
                        fontSize: "20px",
                        fontFamily: "Baloo Bhai 2",
                        
                      }}
                    >
                      Remark:{" "}
                    </label>
                    <TextareaAutosize
                      aria-label="empty textarea"
                      style={{ width: 400, height: 200, fontSize: "20px" }}
                      id="remark"
                      name="remark"
                      placeholder="Tell us about your interest and why do u like to join our team."
                      defaultValue={values.remark}
                      onChange={handleChange("remark")}
                    />
                    <p style={{ color: "maroon", fontSize: "15px" }}>
                      {values.remarkError}
                    </p>
                  </div>

                  <br></br>
                  <br></br>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...label}
                        checked={this.state.isChecked}
                        onChange={this.handleClick}
                        inputProps={{ "aria-label": "controlled" }}
                        label="I agreed to the Terms and Conditions"
                      />
                    }
                  />
                  <Typography
                    component="h1"
                    variant="subtitle2"
                    style={{ padding: "10px", fontSize: "15px" }}
                    color="maroon"
                  >
                    Your Privacy is Important to us. For Details about our use
                    of your information, we always keeps in top secret
                  </Typography>
                  <Button
                    cariant="contained"
                    type="submit"
                    disabled={this.state.isChecked ? false : true}
                    onClick={this.continue}
                    style={{
                      width: "150px",
                      height: "100px",
                      margin: "auto",
                      fontSize: "20px",
                    }}
                  >
                    Submit Form
                  </Button>

                  <span className="btnBack">
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={this.back}
                      style={{
                        width: "150px",
                        height: "100px",
                        margin: "auto",
                        fontSize: "10px",
                      }}
                    >
                      Go Back
                    </Button>
                  </span>

                  {values.formIsValid ? null : (
                    <p style={{ color: "green", fontSize: "15px" }}>
                      {this.state.formConfirmError}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="contact-right">
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
                <img
                  src={image}
                  style={{
                    width: "300px",
                    height: "250px",
                    marginLeft: "80px",
                  }}
                />
              </table>
            </div>
            <br />
          </div>
        </Container>
      </>
    );
  }
}
export default FormConfirm;

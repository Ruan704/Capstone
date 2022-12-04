import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import image from "../../../images/picture.jpg";
import "./FormConfirm.css"
import {
  Button,
  CssBaseline,
  TextField,
  Modal,
  Box,
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
      isModalOpen: false,
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

  handleOpenModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Container component="main" maxWidth="lg" style={{ marginTop: "20px" }}>
          <CssBaseline />
          {/* , marginLeft: "200px" */}
          <div
            className="contact-box"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <br></br>
            <br></br>

            <div className="contact-left" style={{ maxWidth: "500px" }}>
              <form>
                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "Baloo Bhai 2",
                    color: "#f4a460",
                  }}
                >
                  We would like to hear more about you
                </h3>
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
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
                    <h4>
                      Read more about our{" "}
                      <a
                        onClick={this.handleOpenModal}
                        style={{ color: "orange", cursor: "pointer" }}
                      >
                        Terms and Conditions
                      </a>
                    </h4>
                  </div>
                  <Modal
                    open={this.state.isModalOpen}
                    onClose={this.handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                    class= "box"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                      }}
                    >
                      <div class="terms-box">
                        <div class="terms-text">
                      {/* <button >x</button> */}
                      <h2>Terms and condition</h2>
                      <p>Last Edit: 4/12/2022</p>
                      <p>Greeting Users</p>
                      <p>
                        By accessing, registering for, downloading or installing
                        the Platform and/or using the Services, you agree to be
                        bound by these Terms of Use. If you are agreeing to be
                        bound on behalf of your employer or another entity, you
                        represent and warrant that: (i) your employer, or the
                        applicable entity, is duly organised, validly existing
                        and in good standing under the laws of the country in
                        which it is organised or incorporated; (ii) you have
                        full legal authority to bind your employer, or the
                        applicable entity, to these terms and conditions; (iii)
                        you have read and understand these Terms of Use; and
                        (iv) you agree, on behalf of the party that you
                        represent, to these Terms of Use.
                      </p>
                      <h4>I agree to the <span>Terms of Service</span> and I read the privacy notice</h4>
                      <div class="buttons">
                        <button class="btn red-btn" onClick={this.handleCloseModal}>Close</button>
                      </div>
                      </div>
                      </div>
                    </Box>
                  </Modal>
                  <Typography
                    component="h1"
                    variant="subtitle2"
                    style={{ padding: "10px", fontSize: "15px" }}
                    color="maroon"
                  >
                    Your Privacy is Important to us. For Details about our use
                    of your information, we always keeps in top secret
                  </Typography>
                  <div>
                    <Button
                      cariant="contained"
                      type="submit"
                      disabled={this.state.isChecked ? false : true}
                      onClick={this.continue}
                      style={{
                        width: "200px",
                        height: "50px",
                        margin: "auto",
                        fontSize: "15px",
                        fontFamily: "Baloo Bhai 2",
                        borderRadius: "25px",
                      }}
                    >
                      Submit Form
                    </Button>
                  </div>
                  <div>
                    <span className="btnBack">
                      <Button
                        variant="contained"
                        type="submit"
                        onClick={this.back}
                        style={{
                          width: "200px",
                          height: "50px",
                          margin: "auto",
                          fontSize: "15px",
                          fontFamily: "Baloo Bhai 2",
                          backgroundColor: "#f4a460",
                          borderRadius: "25px",
                        }}
                      >
                        Go Back
                      </Button>
                    </span>
                  </div>
                  {values.formIsValid ? null : (
                    <p style={{ color: "green", fontSize: "15px" }}>
                      {this.state.formConfirmError}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="contact-right" style={{ maxWidth: "500px" }}>
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
                  margin: "40px",
                }}
              />
            </div>
            <br />
          </div>
        </Container>
      </>
    );
  }
}
export default FormConfirm;

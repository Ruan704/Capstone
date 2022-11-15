import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

class StepTwoForm extends Component {
  constructor() {
    super();
    this.state = {
      NRIC: "",
      ZIP: "",
      formIsValid: false,
      NRICError: "",
      ZIPError: "",
    };
  }

  handleChange = (e) => {
    if (e.target.id == "NRIC") {
      this.validateNRIC(e.target.value);
    }
    if (e.target.id == "ZIP") {
      this.validateZIP(e.target.value);
    }
  };

  validateNRIC = (NRIC) => {
    let NRICError = this.state.NRICError;
    let formIsValid = this.state.formIsValid;
    // first letter must start with S, T, F or G. Last letter must be A - Z
    var patterns = new RegExp("^[STFG]\\d{7}[A-Z]$");
    if (String(NRIC).trim() === "") {
      NRICError = "*Please enter your NRIC.";
      formIsValid = false;
    } else if (!patterns.test(NRIC)) {
      formIsValid = false;
      NRICError =
        "Please enter valid NRIC (first letter must start with S, T, F or G. Last letter must be A - Z)";
    } else {
      NRICError = "";
      formIsValid = true;
    }
    this.setState({
      NRIC,
      NRICError,
      formIsValid,
    });
    return formIsValid;
  };

  validateZIP = (ZIP) => {
    let ZIPError = this.state.ZIPError;
    let formIsValid = this.state.formIsValid;
    // You need to validate a ZIP code (U.S. postal code), allowing both the five-digit and nine-digit (called ZIP+4) formats. The regex should match 12345 and 12345-6789,
    var patterns = new RegExp("^[0-9]{5}(?:-[0-9]{4})?$");
    if (String(ZIP).trim() === "") {
      ZIPError = "*Please enter your ZIP.";
      formIsValid = false;
    } else if (!patterns.test(ZIP)) {
      formIsValid = false;
      ZIPError = "Please enter valid ZIP";
    } else {
      ZIPError = "";
      formIsValid = true;
    }
    this.setState({
      ZIP,
      ZIPError,
      formIsValid,
    });
    return formIsValid;
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="NRIC"
              type="NRIC"
              value={this.state.NRIC}
              onChange={this.handleChange}
              name="NRIC"
              label="NRIC"
              fullWidth
              autoComplete="given-NRIC"
              variant="standard"
            />
            <p style={{ color: "red" }}>{this.state.NRICError}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="ZIP"
              type="ZIP"
              value={this.state.ZIP}
              onChange={this.handleChange}
              name="ZIP"
              label="Please enter your ZIP / Postal code"
              fullWidth
              autoComplete="family-ZIP"
              variant="standard"
            />
            <p style={{ color: "red" }}>{this.state.ZIPError}</p>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default StepTwoForm;

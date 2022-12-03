import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";
import { onAddFormData } from "../src/action";
import "./StepOneForm.css";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";

class StepTwoForm extends Component {
  constructor() {
    super();
    this.state = {
      NRIC: "",
      formIsValid: false,
      NRICError: "",
    };
  }

  handleChange = (e) => {
    if (e.target.id == "NRIC") {
      this.validateNRIC(e.target.value);
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

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateNRIC(this.state.NRIC)
    ) {
      console.log(uuid());
      //string value
      const unique_id = uuid().slice(0, 8); //'fygdyegu-fiufififo'

      //send data-class based
      this.props.onAddForm({ ...this.state, id: unique_id });

      let NRIC = "";
     let NRICError = "";

      this.setState({
        NRIC: NRIC,
        NRICError :NRICError,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          <Grid form xs={12} md={6}>

            <div style={{fontSize:"15px"}}> For Singaporean Citizens Only *</div>

            <Grid form xs={12}>
            <label style={{ fontSize: "20px" }}>Contact: </label>
            <input
              id="NRIC"
              label="Enter NRIC"
              name="NRIC"
              type="NRIC"
              value={this.state.NRIC}
              onChange={this.handleChange}
              placeholder="Please enter your NRIC"
              style={{ fontSize: "20px" }}
            />
            <p style={{ color: "red", fontSize: "15px" }}>
              {this.state.NRICError}
            </p>
          </Grid>

          <Button
                  type="submit"
                  variant="contained"
                  className="btn"
                  // sx={{ mt: 3, mb: 2 }}
                  onClick={this.handleSubmit}
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
    form: state.form,
  };
};

//created inside the action file
const mapDispatchToProps = (dispatch) => {
  return {
    onAddForm: (item) => dispatch(onAddFormData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTwoForm);

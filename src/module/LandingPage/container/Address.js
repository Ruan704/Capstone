import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//generate a unique id.
import { v4 as uuid } from "uuid";
import { onAddData } from "../../../action";
import { connect } from "react-redux";
import "./Login.css";

class StepTwoForm extends Component {

  constructor() {
    super();
    this.state = {
      phone: "",
      Address: "",
      IC: "",
      formIsValid: false,
      phoneError: "",
      addressError: "",
      ICError: "",
    };
  }

  handleChange = (e) => {
    if (e.target.id == "phone") {
      this.validatePhone(e.target.value);
    }
    if (e.target.id == "address") {
      this.validateAddress(e.target.value);
    }
    if (e.target.id == "IC") {
      this.validateIC(e.target.value);
    }
  };

  validatePhone = (phone) => {
    let phoneError = this.state.phoneError;
    let formIsValid = this.state.formIsValid;
    var patterns = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    );
    if (String(phone).trim() === "") {
      phoneError = "*Please enter your phone.";
      formIsValid = false;
    }
     else if (!patterns.test(phone)){
       formIsValid = false;
        phoneError = "Please enter valid phone";
     }
    else {
      phoneError = "";
      formIsValid = true;
    }
    this.setState({
      phone,
      phoneError,
      formIsValid,
    });
    return formIsValid;
  };

  validateAddress = (address) => {
    let addressError = this.state.addressError;
    let formIsValid = this.state.formIsValid;

    if (String(address).trim() === "") {
      addressError = "*Please enter your address-ID.";
      formIsValid = false;
    }  else {
        addressError = "";
        formIsValid = true;
      }

    this.setState({
      address,
      addressError,
      formIsValid,
    });
    return formIsValid;
  };


  validateIC = (IC) => {
    let ICError = this.state.ICError;
    let formIsValid = this.state.formIsValid;
    // var passportpattern = new RegExp("^([A-Z a-z]){1}([0-9]){8}[A-Z a-z]){1}$");
    if (String(IC).trim() === "") {
      ICError = "*Please enter your Passport number";
      formIsValid = false;
    }
    //  else if (!passportpattern.test(IC)) {
    //   //use Rejex- length== 12 character week 3 wednesday.
    //   //first to two sg and last has to be digits
    //     ICError = "invalid passport its must start with a letter end with a letter and 8 characters in the middle.";
    //     formIsValid = false;
    //   }
       else {
        ICError = "";
        formIsValid = true;
      }
    this.setState({
      IC,
      ICError,
      formIsValid,
    });
    return formIsValid;
  };

  //data is being submitted
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validatephone(this.state.phone) &&
      this.validateaddress(this.state.address) &&
      this.validatePassword(this.state.password) &&
      this.validateIC(this.state.IC)
    ) {
      console.log(uuid());
      //string value
      const unique_id = uuid().slice(0, 8); //'fygdyegu-fiufififo'

      //send data-class based
      this.props.onAddItem({ ...this.state, id: unique_id });

      let phone = "";
      let address = "";
      let password = "";
      let IC = "";
      let phoneError = "";
      let addressError = "";
      let passwordError = "";
      let ICError = "";

      this.setState({
        phone: phone,
        address: address,
        password: password,
        IC: IC,
        phoneError: phoneError,
        addressError: addressError,
        passwordError: passwordError,
        ICError: ICError,
      });
    }
  };

  render() {
    const { employee } = this.props;
    return (
      <>
        <Container
          component="main"
          maxWidth="xs"
          style={{ marginTop: "20px" }}
          class="form"
        >
          <div class="wrapper">
            <div class="title">Verify your Information</div>

            <div class="input_field">
              <TextField
                id="phone"
                phone="phone"
                type="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Enter phone"
              />
              <p style={{ color: "red" }}>{this.state.phoneError}</p>
            </div>

              <TextField
                id="address"
                phone="address"
                type="address"
                classphone="input_field"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Enter address"
              />
              <p style={{ color: "red" }}>{this.state.addressError}</p>
            

            <div class="input_field">
              <TextField
                phone="IC"
                type="IC"
                value={this.state.IC}
                onChange={this.handleChange}
                placeholder="Enter IC"
                id="IC"
                class="input"
              />
              <p style={{ color: "red" }}>{this.state.ICError}</p>
            </div>
            
            <div class="btn">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
           </Container>
      </>
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

//map is pass to props
export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react'
import FormConfirm from "./FormConfirm";
import FormDetail from "./FormDetail";
import FormSuccess from './FormSuccess';
export default class Dashboard extends Component{
   constructor(){
    super();
    this.state ={
      step:1,
      name:'',
      email:'',
      contact:'',
      NRIC:'',
      nationality:'',
      occupation:'',
      remark:'',
      nameError:'',
      emailError:'',
      contactError:'',
      NRICError:'',
      occupationError:'',
      remarkError:'',
      formIsValid: false,
    }
   }

    addVolunteer = () => {
      const num = parseInt(localStorage.getItem('numOfVolunteer')) + 1
      localStorage.setItem('numOfVolunteer', num);
    }

    nextStep = () =>{
      const {step, nationality} = this.state;
      (nationality !== 'Singaporean') ? this.setState({step: step+2}): this.setState({step: step+1})
    }

   prevStep = () =>{
    const {step} = this.state;
    this.setState({step: step-1})
   }

   handleChange = input => event =>{
   if(event.target.id=='name'){
    this.validateName(event.target.value);
   }
    else if(event.target.id == "email"){
      this.validateEmail(event.target.value);
    }
    else if(event.target.id == "contact"){
      this.validateContact(event.target.value);
    }
    else if(event.target.id=="occupation"){
      this.validateOccupation(event.target.value);
    }
    else if(event.target.id=="remark"){
      this.validateRemark(event.target.value);
    }
    else if(event.target.id=="NRIC"){
      this.validateNRIC(event.target.value);
    } else if(event.target.id=="nationality"){
      this.validateNationality(event.target.value);
    }
   }


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
    var pattern = new RegExp(/^[0-9]{8}$/);
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

  validateOccupation = (occupation) => {
    let occupationError = this.state.occupationError;
    let formIsValid = this.state.formIsValid;
    if (String(occupation).trim() === "") {
      occupationError = "*Please enter your occupation.";
      formIsValid = false;
    } else {
      occupationError = "";
      formIsValid = true;
    }
    this.setState({
      occupation,
      occupationError,
      formIsValid,
    });
    return formIsValid;
  };

  validateRemark = (remark) => {
    let remarkError = this.state.remarkError;
    let formIsValid = this.state.formIsValid;
    if (String(remark).trim() === "") {
      remarkError = "*Please enter your remark.";
      formIsValid = false;
    } else {
      remarkError = "";
      formIsValid = true;
    }
    this.setState({
      remark,
      remarkError,
      formIsValid,
    });
    return formIsValid;
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
      NRICError =  "Please enter valid NRIC (first letter must start with S, T, F or G. Last letter must be A - Z)";
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
  
  validateNationality = (nationality) => {
    // first letter must start with S, T, F or G. Last letter must be A - Z
    this.setState({
      nationality,
      formIsValid: nationality ? true: false,
    });
    return formIsValid;
  };

  render(){
   const {step} = this.state;
   const{name,nationality, email,contact,NRIC,occupation,remark, nameError, emailError,contactError,NRICError,occupationError,remarkError,formIsValid} = this.state;
   const values = {name, nationality,email,contact,NRIC,occupation,remark, nameError, emailError,contactError,NRICError,occupationError,remarkError,formIsValid};
   switch(step){
    case 1:
      return(
        <FormDetail
        nextStep = {this.nextStep}
        handleChange = {this.handleChange}
        values = {values}
        />
      )
      case 2:
        return(
          <FormConfirm
          prevStep = {this.prevStep}
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}/>
        )
        case 3:
          return(
            <FormSuccess />
          )
   }
  }
}

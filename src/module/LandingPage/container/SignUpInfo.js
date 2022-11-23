import React , {useState} from "react";
import Button from "@mui/material/Button";
function SignUpInfo({ formData, setFormData }) {

  const handleChange = (e) => {
    if (e.target.id == "name") {
      validateName(e.target.value);
    }
    if (e.target.id == "contact") {
      validateContact(e.target.value);
    }
    if (e.target.id == "email") {
      validateEmail(e.target.value);
    }
  };

  const validateName = (name) => {
    let nameError = formData.nameError;
    let formIsValid = formData.formIsValid;
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
    setFormData({
      name,
      nameError,
      formIsValid,
    });
    return formIsValid;
  };

  const validateContact = (contact) => {
    let contactError = formData.contactError;
    let formIsValid = formData.formIsValid;
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
    setFormData({
      contact,
      contactError,
      formIsValid,
    });
    return formIsValid;
  };

  const validateEmail = (email) => {
    let emailError = formData.emailError;
    let formIsValid = formData.formIsValid;
    var pattern = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
    if (String(email).trim() === "") {
      emailError = "*Please enter your email.";
      formIsValid = false;
    } else if (!pattern.test(email)) {
      formIsValid = false;
      emailError = "Please enter valid email";
    } else {
      emailError = "";
      formIsValid = true;
    }
    setFormData({
      email,
      emailError,
      formIsValid,
    });
    return formIsValid;
  };

  return (
    <div className="sign-up-container">
      <input
        required
        id="name"
        type="name"
        value={formData.name}
        onChange={handleChange}
        name="name"
        label="First Name"
        fullWidth
        placeholder="Please Enter Name..."
        autoComplete="given-firstName"
        variant="standard"
      />
      <p style={{ color: "red", fontSize: "15px" }}>{formData.nameError}</p>
      <input
        required
        id="contact"
        type="contact"
        label="contact"
        value={formData.contact}
        onChange={handleChange}
        fullWidth
        autoComplete="contact"
        placeholder="contact"
        variant="standard"
      />
      <p style={{ color: "red", fontSize: "15px" }}>{formData.contactError}</p>
      <input
        required
        id="email"
        type="email"
        label="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        autoComplete="email"
        placeholder="email"
        variant="standard"
      />
      <p style={{ color: "red", fontSize: "15px" }}>{formData.emailError}</p>

      
      {/* {formData.formIsValid ? (
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onclick}
          // {...this.state.formIsValid ? "" : "disabled"}
        >
          Submit
        </Button>
      ) : (
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onclick}
          disabled
        >
          Submit
        </Button> */}
      {/* )} */}
    </div>
  );
}

export default SignUpInfo;

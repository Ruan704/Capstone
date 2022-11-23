import React from "react";
import TextField from "@mui/material/TextField";
function PersonalInfo({formData, setFormData }) {


  const handleChange = (e) => {
    if (e.target.id == "firstName") {
      validateFirstName(e.target.value);
    }
  };

  const validateFirstName = (firstName) => {
    let firstNameError = formData.firstNameError;
    let formIsValid = formData.formIsValid;
    var patterns = new RegExp(/[^a-zA-Z]/);
    if (String(firstName).trim() === "") {
      firstNameError = "*Please enter your firstName.";
      formIsValid = false;
    } else if (patterns.test(firstName)) {
      formIsValid = false;
      firstNameError = "Please enter valid firstName";
    } else {
      firstNameError = "";
      formIsValid = true;
    }
    setFormData({
      firstName,
      firstNameError,
      formIsValid,
    });
    return formIsValid;
  };

  return (
    <div className="personal-info-container">
     <input
              required
              id="firstName"
              type="firstName"
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              label="First Name"
              fullWidth
              placeholder="First Name..."
              autoComplete="given-firstName"
              variant="standard"
            />
            <p style={{ color: "red" }}>{formData.firstNameError}</p>
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;
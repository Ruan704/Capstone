import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Button from "@mui/material/Button";
import "./MultiStepForm.css";
function MultiStepForm() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    nationality: "",
    other: "",
    formIsValid: false,
    nameError: "",
    contactError: "",
    emailError: "",
    confirmPasswordError: "",
    lastNameError: "",
    usernameError: "",
    nationalityError: "",
    otherError: "",
  });

  const FormTitles = ["First Page", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const onclick= () => {
    if (page === FormTitles.length - 1) {
      alert("FORM SUBMITTED");
      console.log(formData);
    } else {
      // if(email)
      setPage((currPage) => currPage + 1);
    }
  }

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>


          {/* <button
            disabled = {formData.formIsValid}
            onClick={onclick} >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button> */}

          {formData.formIsValid ? (
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onclick}
          // {...this.state.formIsValid ? "" : "disabled"}
        >
           {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onclick}
          disabled
        >
           {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </Button>
        )}
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;

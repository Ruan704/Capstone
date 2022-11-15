import React, { Component } from "react";
import FAQ from "./FAQ.js";
import Query from "./Query.js";
import "./ContactUs.css";
class Frontpage extends Component {
  render() {
    return (
      <div>
        <br></br>
        <FAQ />
        <br></br>
        <Query/>
      </div>
    );
  }
}
export default Frontpage;

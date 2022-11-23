import React, { Component } from "react";
import Parallex4 from "./Parallex4.js";
import FAQ from "./FAQ.js";
import Query from "./Query.js";
import "./ContactUs.css";
class Frontpage extends Component {
  render() {
    return (
      <div>
        <Parallex4/>
        <br></br>
        <FAQ />
        <br></br>
        <Query/>
        <br></br>
      </div>
    );
  }
}
export default Frontpage;

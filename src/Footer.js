import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
class Footer extends Component {
  render() {
    return (
      <>
        <footer class="text-center text-lg-start bg-white text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              <span style={{color:"grey", fontSize: "25px" }}>
                Get connected with us on social networks:
              </span>
            </div>
            <div style={{textAlign:"center"}}>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-facebook-f fa-3x"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-twitter fa-3x"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-google fa-3x"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-instagram fa-3x"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-linkedin fa-3x"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-github fa-3x"></i>
              </a>
            </div>
          </section>
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  
                    <i class="bi bi-bug bi-3x" style={{ fontSize: "20px" ,margintop: '400px'}}/>
                    <h6
                    class="text-uppercase fw-bold mb-4" style={{fontSize:"20px"}}
                  >
                   WWP
                  </h6>
                  <p style={{ fontSize: "20px" , display: "inline", textAlign:"center"}}>
                    The World Widelife Protection is an international
                    non-governmental organization founded in 1961 that works in
                    the field of wilderness preservation and the reduction of
                    human impact on the environment.
                  </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6
                    class="text-uppercase fw-bold mb-4"
                    style={{ fontSize: "20px" }}
                  >
                    Involve
                  </h6>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/Frontpage"
                      className="words"
                      style={{ fontSize: "20px" }}
                    >
                      Home
                    </Nav.Link>
                  </li>
                  <br></br>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/aboutComponent"
                      style={{ fontSize: "20px" }}
                    >
                      About
                    </Nav.Link>
                  </li>
                  <br></br>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/sanctuary"
                      style={{ fontSize: "20px" }}
                    >
                      Species
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/Services"
                      style={{ fontSize: "20px" }}
                    >
                      Services
                    </Nav.Link>
                  </li>
                  <br></br>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/Front"
                      style={{ fontSize: "20px" }}
                    >
                      Join
                    </Nav.Link>
                  </li>
                  <br></br>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/ContactUs"
                      style={{ fontSize: "20px" }}
                    >
                      Contact
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      as={Link}
                      to="/TermsAndCondition"
                      style={{ fontSize: "20px" }}
                    >
                      Terms And Condition
                    </Nav.Link>
                  </li>
                </div>
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{display: "inline", textAlign:"center"}}>
                  <h6
                    class="text-uppercase fw-bold mb-4"
                    style={{ fontSize: "20px" }}
                  >
                    Contact
                  </h6>
                  <p style={{ fontSize: "20px",  display: "inline" }}>
                    <i class="fas fa-home me-3 text-secondary fa-2x"></i>
                    <h4>
                     4 Shenton Way No 01-01 SGX Centre 2 Singapore, 068807
                    Singapore
                    </h4>
                  </p>
                  <p style={{ fontSize: "20px",  display: "inline"  }}>
                    <i class="fas fa-envelope me-3 text-secondary fa-2x"></i>
                    <h4>
                    WLP@gmail.com
                    </h4>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    <i class="fas fa-phone me-3 text-secondary fa-2x"></i> 
                    <h4>
                    	+65 6438 8900
                     </h4> 
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div class="text-center p-4">
            © 2021 Copyright:
            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
              MDBootstrap.com
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

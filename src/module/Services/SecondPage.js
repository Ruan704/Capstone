import * as React from "react";
import { useNavigate } from "react-router";
import "./SecondPage.css";

const SecondPage = () => {

 const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-success my-5">Services</h1>
      <div className="container" style={{ marginbottom: "10px" }}>
        <div className="row">
          <div className="col-md-3" style={{marginRight: "100px"}}>
            <div class="card" style={{marginRight: "50px"}}>
              <img
                class="card-img-top"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Human-wildlife_conflict.jpg"
                alt="Card image cap"
                style={{ width: "350px", height: "200px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", fontSize: "30px", textAlign:"center" }}
                >
                  Wildlife Supporting
                </h5>
                <p class="card-text" style={{ fontSize: "20px" }}>
                  Have a real life distance between u and the wildlife
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>navigate('/wildlifeSupporting')}
                  style={{
                    width: "150px",
                    height: "50px",
                    fontSize: "20px",
                    marginLeft: '90px'
                  }}

                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;
          <div className="col-md-3" style={{marginRight: "150px"}}>
            <div class="card" style={{marginRight: "100px"}}>
              <img
                class="card-img-top"
                src="https://www.librarypoint.org/wp-content/uploads/sites/60/2018/04/raina1med.jpg"
                alt="Card image cap"
                style={{ width: "350px", height: "200px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", fontSize: "30px",  textAlign:"center" }}
                >
                  Wildlife Education
                </h5>
                <p class="card-text" style={{ fontSize: "20px" }}>
                  Learning more about wildlife by Knowledge
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>navigate('/wildlifeEducation')}
                  style={{
                    width: "150px",
                    height: "50px",
                    fontSize: "20px",
                    marginLeft: '90px'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.earthtouchnews.com/media/1947013/wildlife-rescue_image.jpg?mode=crop&width=710&height=474"
                alt="Card image cap"
                style={{ width: "350px", height: "200px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ fontWeight: "bold", fontSize: "30px",  textAlign:"center" }}
                >
                  Wildlife Save
                </h5>
                <p class="card-text" style={{ fontSize: "20px" }}>
                  What measures are we using to save the wildlife
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() =>navigate('/wildlifeSave')}
                  style={{
                    width: "150px",
                    height: "50px",
                    fontSize: "20px",
                    marginLeft: '90px'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecondPage;

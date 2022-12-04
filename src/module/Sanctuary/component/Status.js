import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function searchFor(term, filter) {
  return function (x) {
    return (x.scientificName.toLowerCase().includes(term.toLowerCase()) || !term) && (filter ? x.taxonomicStatus === filter.toUpperCase(): true);
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#7D8F69",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "30px",
  color: theme.palette.text.secondary,
}));

const Status = () => {
  const [post, setPost] = useState("");
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("");
  const filterTerms = ["Accepted", "Doubtful", "Synonym"];

  useEffect(() => {
    axios
      .get("https://api.gbif.org/v1/species")
      .then((res) => {
        console.log(res.data.results);
        setPost(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    console.log(event);
    setTerm(event.target.value);
  };

  const postList =
    post.length || post === undefined ? (
      post.filter(searchFor(term, filter)).map((p) => {
        return (
          <div>
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={p.key}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Item
                style={{
                  width: "300px",
                  fontFamily: "Baloo Bhai 2",
                }}
              >
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  <div
                    style={{
                      color: "#A9AF7E",
                      fontFamily: "Baloo Bhai 2",
                    }}
                  >
                    Canonical Name:{" "}
                  </div>
                  {p.scientificName}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  <div
                    style={{
                      color: "#A9AF7E",
                      fontFamily: "Baloo Bhai 2",
                    }}
                  >
                    Threat Status{" "}
                  </div>
                  {p.taxonomicStatus}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  <div
                    style={{
                      color: "#A9AF7E",
                      fontFamily: "Baloo Bhai 2",
                    }}
                  >
                    Kingdom:
                  </div>{" "}
                  {p.kingdom}
                </p>
              </Item>
            </Grid>
          </div>
        );
      })
    ) : (
      <div style={{ margin: "auto", paddingTop: "60px" }}>
        <CircularProgress color="success" />
      </div>
    );

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "35px",
          background: "#E6E5A3",
          fontFamily: "Baloo Bhai 2",
        }}
      >
        Animals
      </div>
      <input
        style={{
          marginTop: "15px",
          width: "500px",
          fontSize: "25px",
          marginBottom: "15px",
        }}
        placeholder="Search Animal"
        id="search"
        name="search"
        onChange={handleChange}
        className="input"
      ></input>
      <div
        className="status"
        style={{
          display: "flex",
          margin: "auto",
          marginBottom: "15px",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
          maxWidth: "440px",
        }}
      > <h4 style={{marginTop: "25px"}}>Filter By: </h4>
        <button
          className="btn btn-primary"
          style={{
            width: "80px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
            fontFamily: "Baloo Bhai 2",
            backgroundColor: filter === "Accepted"? "#A9AF7E": "#f4a460",
            boxShadow: "none"
          }}
          onClick={() => {setFilter("Accepted")}}
        >
          Accepted
        </button>
        <button
          className="btn btn-primary"
          style={{
            width: "80px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
            fontFamily: "Baloo Bhai 2",
            backgroundColor:  filter === "Doubtful"? "#A9AF7E": "#f4a460",
            boxShadow: "none"
          }}
          onClick={() => {setFilter("Doubtful")}}
        >
          Doubtful
        </button>
        <button
          className="btn btn-primary"
          style={{
            width: "80px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
            fontFamily: "Baloo Bhai 2",
            backgroundColor: filter === "Synonym"? "#A9AF7E": "#f4a460",
            boxShadow: "none"
          }}
          onClick={() => {setFilter("Synonym")}}
        >
          Synonym
        </button>
        <button
          className="btn btn-primary"
          style={{
            width: "80px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
            fontFamily: "Baloo Bhai 2",
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "green"
          }}
          onClick={() => {setFilter("")}}
        >
          Reset Filter
        </button>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ color: "red", marginBottom: "60px" }}
      >
        {postList}
      </Grid>
    </div>
  );
};

export default Status;

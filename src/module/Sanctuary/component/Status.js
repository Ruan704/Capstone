import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import TextField from '@mui/material/TextField';

function searchFor(term) {
  return function (x) {
    return x.scientificName.toLowerCase().includes(term.toLowerCase()) || !term;
  }
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
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://api.gbif.org/v1/species"
      )
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
    post.length || post === undefined
      ? post.filter(searchFor(term)).map((p) => {
          return (
            <div >
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={p.key}
              columns={{ xs: 4, sm: 8, md: 12 }}
              
            >
              <Item style={{width:"500px"}}>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  <div style={{color:"#A9AF7E"}}>Canonical Name: </div>
                  {p.scientificName}
                </p>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  <div style={{color:"#A9AF7E"}}>Threat Status </div>
                  {p.taxonomicStatus}
                </p>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    <div style={{color:"#A9AF7E"}} >Kingdom:</div>{" "}
                    {p.kingdom}
                  </p>
              </Item>
            </Grid>
          </div>
          );
        })
      : "No content";

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "35px" , background: "yellow"}}>Animals</div>
      <TextField
          style={{ marginTop: "20px", width:"500px", fontSize:"100px"}}
          placeholder="Search Animal"
          id="search"
          name="search"
          type="text"
          value={term}
          onChange={handleChange}
          className="input"
        >
          </TextField>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{color:"red"}}
      >
        {postList}
      </Grid>
    </div>
  );
};

export default Status;
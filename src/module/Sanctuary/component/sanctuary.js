import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import TextField from '@mui/material/TextField';

function searchFor(term) {
  return function (x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "30px",
  color: theme.palette.text.secondary,
}));



const sanctuary = () => {
  const [post, setPost] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    axios
      .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    console.log(event);
    setTerm(event.target.value);
  };

  return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div style={{fontWeight: 'bold', fontSize:"35px"}}>List of Animals</div>
        <TextField
          style={{ marginTop: "20px", width:"500px", height:"100"}}
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
        >

          {post.filter(searchFor(term)).map(animals => {
            return (
                <Grid item xs={2} sm={4} md={4} key={animals.id}>
                  <Item>
                    <p style={{fontWeight: 'bold', fontSize:"30px"}} >{animals.name}</p>
                    <img
                      src={animals.image_link}
                      alt="recipe-data"
                      className="recipe-image"
                      style={{
                        width: "200px",
                        height:"200px",
                        objectFit: "cover",
                        borderRadius: "15px",
                        margin: "5px",
                      }}
                    />
                    <div className="type">
                      <p style={{fontSize:"18px"}}>Type: {animals.animal_type}</p>
                    </div>
                    <div className="life">
                      <p style={{fontSize:"18px"}}>Lifespan: {animals.lifespan}</p>
                    </div>
                    <div className="habitat">
                      <p style={{fontSize:"18px"}}>Habitat: {animals.habitat}</p>
                    </div>
                    <div className="diet">
                      <p style={{fontSize:"18px"}}>Diet: {animals.diet}</p>
                    </div>
                    <div className="geo_range">
                      <p style={{fontSize:"18px"}} >Location: {animals.geo_range}</p>
                    </div>
                  </Item>
                </Grid>
            );
          })}
        </Grid>
      </div>
  );
};

export default sanctuary;

//https://swildi.org/?gclid=Cj0KCQiAmaibBhCAARIsAKUlaKQ4ATxao8OBzMK0SI2ZZrGQrLhihmYk8a5evGqjAVb8XTv5bQ-vOKwaAkCrEALw_wcB

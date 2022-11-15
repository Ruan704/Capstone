import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

function searchFor(term) {
  return function (item) {
      return item.name.toLowerCase().includes(term.toLowerCase()) || !term;
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

  const navigate = useNavigate();

  // const LoadDetails = (id) => {
  //   console.log(id);
  //   navigate("/AnimalCard/" + id);
  // };

  useEffect(() => {
    axios
      .get("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchHandler = (e) => {
    console.log(e);
    setTerm(e.target.value);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px",
          marginRight: "20px",
          marginLeft: "20px",
        }}
      >
        <TextField
          style={{ marginTop: "20px" }}
          id="search"
          name="search"
          type="text"
          value={term}
          onChange={searchHandler}
          palceholder="Search..."
        />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >

          {post.filter(searchFor(term)).map(animals => {
            return (
                <Grid item xs={2} sm={4} md={4} key={animals.id}>
                  <Item>
                    <p>{animals.name}</p>
                    <img
                      src={animals.image_link}
                      alt="recipe-data"
                      className="recipe-image"
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "15px",
                        margin: "5px",
                      }}
                    />
                    <div className="latin_name">
                      <h5>Latin Name</h5>
                      <p>{animals.latin_name}</p>
                    </div>
                    <div className="type">
                      <h5>Type</h5>
                      <p>{animals.animal_type}</p>
                    </div>
                    <div className="length">
                      <h5>Length</h5>
                      <div>
                        <p>Min: {animals.length_min}</p>
                        <p>Max: {animals.length_max}</p>
                      </div>
                    </div>
                    <div className="weight">
                      <h5>Weight</h5>
                      <div>
                        <p>Min: {animals.weight_min}</p>
                        <p>Max: {animals.weight_max}</p>
                      </div>
                    </div>
                    <div className="life">
                      <h5>Lifespan</h5>
                      <p>{animals.lifespan}</p>
                    </div>
                    <div className="habitat">
                      <h5>Habitat</h5>
                      <p>{animals.habitat}</p>
                    </div>
                    <div className="diet">
                      <h5>Dite</h5>
                      <p>{animals.diet}</p>
                    </div>
                    <div className="geo_range">
                      <h5>Geo Range</h5>
                      <p>{animals.geo_range}</p>
                    </div>
                  </Item>
                </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default sanctuary;

//https://swildi.org/?gclid=Cj0KCQiAmaibBhCAARIsAKUlaKQ4ATxao8OBzMK0SI2ZZrGQrLhihmYk8a5evGqjAVb8XTv5bQ-vOKwaAkCrEALw_wcB

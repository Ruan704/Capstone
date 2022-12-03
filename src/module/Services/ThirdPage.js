import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./ThirdPage.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "teal",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  margin: "30px",
  color: theme.palette.text.secondary,
}));

const ThirdPage = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=nature&pageSize=6&apiKey=5ba853a666084f2789ba19fb82268284"
      )
      .then((res) => {
        console.log(res.data.articles);
        setPost(res.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  const postList =
    post.length || post === undefined
      ? post.map((p) => {
          return (
            // <div>
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={p.id}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Item>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "30px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                >
                  {p.author}
                </p>
                <img
                  src={p.urlToImage}
                  alt="recipe-data"
                  className="recipe-image"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    margin: "5px",
                    fontFamily: "Baloo Bhai 2",
                    
                  }}
                />
                <div className="type">
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "Baloo Bhai 2",
                      
                    }}
                  >
                    <div
                      style={{
                        color: "brown",
                        fontFamily: "Baloo Bhai 2",
                        
                      }}
                    >
                      Description:
                    </div>{" "}
                    {p.description}
                  </p>
                </div>
                <a
                  href={p.url}
                  style={{
                    width: "250px",
                    height: "50px",
                    fontSize: "20px",
                    marginLeft: "25px",
                    fontFamily: "Baloo Bhai 2",
                    
                    backgroundColor: "#f4a460",
                  }}
                >
                  URL
                </a>
              </Item>
            </Grid>
            // </div>
          );
        })
      : "No content";

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
        Articles
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {postList}
      </Grid>
    </div>
  );
};

export default ThirdPage;

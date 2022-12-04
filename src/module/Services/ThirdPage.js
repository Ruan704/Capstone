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
        "https://newsdata.io/api/1/news?apikey=pub_14166fee73acf4d8d8326c94ed921ea7c5979&category=environment&language=en"
      )
      .then((res) => {
        console.log(res.data.results);
        setPost(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const postList =
  post.length || post === undefined
  ? post.filter(x => x.image_url !== null).map((p) => {
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
                  {p.creator}
                </p>
                <img
                  src={p.image_url}
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
                    </div>{" "}
                    {p.title}
                  </p>
                </div>
                <a
                  href={p.link}
                  style={{
                    width: "250px",
                    height: "50px",
                    fontSize: "20px",
                    marginLeft: "25px",
                    fontFamily: "Baloo Bhai 2",
                    color: "white",
                    textDecoration: "none"
                  }}
                >
                  View More
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

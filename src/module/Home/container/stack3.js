import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Home from "../../../images/home2.jpg";
import { useNavigate } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stac3() {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx={{ boxShadow: "none", backgroundColor: "#557153" }}>
          <div className="homevolunteer">
            <h1
              style={{
                fontSize: "25px",
                color: "light-brown",
                textAlign: "center",
                color: "#E6E5A3",
                fontFamily: "Baloo Bhai 2",
                cursive,
                marginTop: "25px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              Protecting Wildlife for a Healthy Planet
            </h1>
            <div
              style={{
                fontSize: "20px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <h8
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "20px",
                  color: "#A9AF7E",
                  fontFamily: "Baloo Bhai 2",
                  cursive,
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                {" "}
                Wildlife protection Conservation is an organisation dedicated to
                the conservation of biodiversity, animal species and their
                habitats, through the collaboration with local residents and
                organisations.Overhere u can check for the various kinds of
                species that we save and protected
              </h8>
              <br></br>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/sanctuary")}
                style={{
                  width: "250px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "25px",
                  fontFamily: "Baloo Bhai 2",
                  cursive,
                  backgroundColor: "#f4a460",
                }}
              >
                Search wildlife species
              </button>
            </div>
          </div>
        </Item>
        <Item sx={{ boxShadow: "none", backgroundColor: "#557153" }}>
          <img
            src={Home}
            alt="Joinus"
            style={{ width: "400px", height: "300px" }}
          />
        </Item>
      </Stack>
    </div>
  );
}

import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Home from "../../../images/home.jpg";
import { useNavigate } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stack1() {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
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
                
                marginTop: "25px",
                paddingLeft: "25px",
                paddingRight: "25px",
              }}
            >
              About Us
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
                  
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                {" "}
                Wildlife conservation volunteering is the perfect conservation
                opportunity to protect endangered species from extinction.
                Volunteering with wild animals includes tasks like observe and
                monitor exotic species for research and anti-poaching measures.
                Volunteer with those animals that cannot be released back into
                the wild. Learn to care for these animals and help these animals
                by giving your unconditional love. Make a difference and
                conserve the diversity of life on earth by protecting endangered
                wildlife!
              </h8>
              <br></br>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/overview")}
                style={{
                  width: "250px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "25px",
                  fontFamily: "Baloo Bhai 2",
                  
                  backgroundColor: "#f4a460",
                }}
              >
                Read More About Us
              </button>
            </div>
          </div>
        </Item>
        <Item sx={{ boxShadow: "none", backgroundColor: "#557153" }}>
          <img
            src={Home}
            alt="Joinus"
            style={{ width: "300px", height: "300px" }}
          />
        </Item>
      </Stack>
    </div>
  );
}

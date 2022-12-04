import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import volunteer from "../../../images/vol.jpg";
import { useNavigate } from "react-router";
import "./stack3.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Stack4() {
  const navigate = useNavigate();
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx={{ boxShadow: "none", backgroundColor: "#557153" }}>
        <div class="container">
          <div class = "box">
          <img
            src={volunteer}
            alt="Joinus"
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
          />
           </div>
        </div>
        </Item>
        <Item sx={{ boxShadow: "none", backgroundColor: "#7D8F69" }}>
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
              Be a volunteer
            </h1>
            <div style={{ fontSize: "25px" }}>
              <h8
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "20px",
                  color: "#395144",
                  fontFamily: "Baloo Bhai 2",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                By Joining our team and volunteering we includes task like
                observing and saving endangered species for both reseatch and
                anti-poaching measures.If interested to play a part to save the
                animal please press the button for volunteering below.
              </h8>
              <br></br>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/Front")}
                style={{
                  width: "250px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "25px",
                  fontFamily: "Baloo Bhai 2",
                  
                  backgroundColor: "#f4a460",
                }}
              >
                Join Us Now
              </button>
            </div>
          </div>
        </Item>
      </Stack>
    </div>
  );
}

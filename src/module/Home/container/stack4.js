import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import volunteer from "../../../images/vol.jpg";
import { useNavigate } from "react-router";

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
          <img
            src={volunteer}
            alt="Joinus"
            style={{ width: "600px", height: "500px" }}
          />
        </Item>
        <Item sx={{ boxShadow: "none", backgroundColor: "#7D8F69" }}>
          <div className="homevolunteer">
            <h1
              style={{
                fontSize: "35px",
                color: "light-brown",
                textAlign: "center",
                color: "#E6E5A3",
                fontFamily: "Lato",
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
                  fontSize: "30px",
                  color: "#A9AF7E",
                  fontFamily: "Lato",
                }}
              >
                {" "}
                By Joining our team and volunteering we includes task like
                observing and saving endangered species for both reseatch and
                anti-poaching measures.
              </h8>
              <br></br>
              <h8
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "100%",
                  fontSize: "30px",
                  color: "#A9AF7E",
                  fontFamily: "Lato",
                }}
              >
                If interested to play a part to save the animal please press the
                button for volunteering below.
              </h8>
              <br></br>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/Front")}
                style={{
                  width: "250px",
                  height: "50px",
                  fontSize: "20px",
                  marginLeft: "90px",
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

import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import stack from "../../../images/tiger.jpg";
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
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx={{ boxShadow: "none" , backgroundColor: "#557153"}}>
          <img
            src={stack}
            alt="Joinus"
            style={{ width: "400px", height: "500px" }}
          />
        </Item>
        <Item sx={{ boxShadow: "none", backgroundColor: "#7D8F69" }}>
          <div className="homevolunteer">
            <h1 style={{ fontSize:"35px", color:"light-brown",textAlign:"center", 
        color:"#E6E5A3", fontFamily:"Lato"  }}>Our Impact</h1>
            <div style={{ fontSize: "25px" }}>
              <h8 style={{ textAlign: 'center',alignItems:"center", width: '100%',fontSize: "30px", color:"#A9AF7E", fontFamily:"Lato" }}>
                {" "}
                As a leading conservation organization in singapore, WWP works with nearly 40 
                countries accross the worlds to takle the most pressing issues with conflict of
                wildlife, people, nature and the climate.
              </h8>
              <br></br>
              <h8 style={{ textAlign: 'center',alignItems:"center", width: '100%',fontSize: "30px", color:"#A9AF7E", fontFamily:"Lato" }}>
               we also collaberate with different local comminity to helps the natural resources as we all depends on and build a environmental and people 
               co-exist in harmony
              </h8>
              <br></br>
              <h8 style={{ textAlign: 'center',alignItems:"center", width: '100%',fontSize: "30px", color:"#A9AF7E", fontFamily:"Lato" }}>
                {" "}
                Together with partners at all levels, we transform policies and conservation strategies towardssustainable threats during the climate
                change and preserve and restore the wildlife and their habitats.
              </h8>
            </div>
          </div>
        </Item>
       
      </Stack>
    </div>
  );
}

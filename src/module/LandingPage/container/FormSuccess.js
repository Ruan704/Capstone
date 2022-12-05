import React from 'react'
import image from "../../../images/form_submitted.png"
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from 'react-bootstrap';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode =='dark' ? '#1A2027' :'#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function FormSuccess(){
    return(
        <div className="formsuccess" width='320px' height='300px'>
            <Stack direction={{xs:'column', sm:'row'}}
            spacing={{xs:1, sm:2, md:4}}
            marginTop="20px"
            marginBottom="20px"
            >
                <Item>
                    <img src={image} alt="thank you" width='80%' height='80%' style={{width:"450px", height:"350px"}}/>
                </Item>
                <Item>
                    <h1>Welcome to Team!</h1>
                    <h4>Thanks for Singing up...</h4>
                    <h4>Our team will contact with you soon.</h4>
                    {/* <h3>You are the {localStorage.getItem('numOfVolunteer')} volunteers.</h3> */}
                </Item>
            </Stack>
        </div>
    )
  }
  export default FormSuccess;
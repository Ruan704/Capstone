//To search Animal status from local Animal data
import React, {useState} from 'react'
import AnimalData from './AnimalData.js';
import {Box,InputLabel,MenuItem,FormControl,Select,Paper} from '@mui/material/';
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#e9f8c8",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

function Search() {

  function list(){
    return function(x){
      return x.status.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  };

  const [term, setTerm] = React.useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    
    <div className="searchAnimal" style={{textAlign:"center", margin:"30px"}}>
    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs:4, sm:5, md:5 }}>
    <h1>Search for Animal Status</h1> <br/>

    <Box sx={{ minWidth: "50%", margin:"30px", backgroundColor:"#f6f4f4"}}>
          <FormControl fullWidth>
            <InputLabel id="search">Animal Status</InputLabel>
            <Select
              labelId="search-label"
              id="search-select"
              value={term}
              label="Animal Status"
              onChange={handleChange}
            >
              <MenuItem value="Endangered">Endangered</MenuItem>
              <MenuItem value="Vulnerable">Vulnerable</MenuItem>
              <MenuItem value="Critically">Critically Endangered</MenuItem>
              <MenuItem value="Near">Near Threatened</MenuItem>
            </Select>
          </FormControl>
        </Box>

     {AnimalData.filter(list(term)).map( info => {
        return(
            <Grid xs={12} sm={6} md={4} key={info.id}>
            <Item className='searchcard'>
              <h4> {info.name} </h4>
              <img src={info.img} alt="animal" width="50%"/>
              <h5> {info.description} </h5>
              <br/>
            </Item>
          </Grid>
        )
    })}
    </Grid>
    </div>
  );
  };
   export default Search;
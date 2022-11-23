import React, { useState } from 'react';
import data from './data';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "white",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: "30px",
    color: theme.palette.text.secondary,
}));

const Recipe = () => {

    return (
        <div style={{ textAlign: "center"}}>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                {data.threats.map(item => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={item.idCategory} style={{width:"800px"}}>
                            <Item>
                                <img src={item.strNamePicture} alt="recipe-data" style={{  width: "200px", height: "200px"}} />
                                <p style={{ fontWeight: 'bold' , fontSize:"30px"}} >{item.strName}</p>
                                <p style={{ fontSize:"20px",  textAlign:"center", display: "inline"}}>{item.strNameDescription}</p>
                            </Item>
                        </Grid>
                    )

                })}


            </Grid>
        </div>
        
    //     <Card sx={{ maxWidth: 345 }}>
    //     <CardMedia
    //       component="img"
    //       alt="green iguana"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button size="small">Share</Button>
    //       <Button size="small">Learn More</Button>
    //     </CardActions>
    //   </Card>
    );
};

export default Recipe;
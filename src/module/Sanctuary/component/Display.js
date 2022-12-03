// import React from 'react';
// // import '../Container/searchMain.css'

// // Import for styling from MUI
// import {Card,CardContent,CardMedia,CssBaseline} from '@mui/material/';
// import {Grid,Box,Typography,Container} from '@mui/material/';

// const cards = [1, 2, 3, 4, 5, 6];

// function Display({data}) {
//     return (
//       <div className='searchapi'> 
//       <CssBaseline />
//         <main>
//         <Box
//           sx={{
//             bgcolor: 'background.paper',
//             pt: 8,
//             pb: 6,
//           }}
//         >
//           <Container maxWidth="sm">
//            <h1> WILDLIFE ANIMALS </h1> 
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="lg">
//           <Grid container spacing={3}>
//             {data.map((card) => (
//                 // 
//               <Grid item key={card.key} xs={12} sm={6} md={4}>
//                 <Card
//                   sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
//                 >
//                     console.log(card.scientificName)
//                   {/* <CardMedia
//                     component="img"
//                     sx={{
//                       // 16:9
//                       // pt: '56.25%',
//                       pt: '10%',
//                     }}
//                     image={card.image_link}
//                     alt="animal"
//                   /> */}

//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography gutterBottom variant="h5" component="h2">
//                     Name: {card.scientificName}
//                     </Typography>
//                     console.log(card.scientificName)
//                     {/* <Typography gutterBottom variant="h6" component="h2">
//                     Habitat: {card.habitat}
//                     </Typography>
//                     <Typography>
//                     Diet:  {card.diet}
//                     </Typography> */}
//                   </CardContent>
//                  </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//     </div>            
//   );

//   };
 
// export default Display;
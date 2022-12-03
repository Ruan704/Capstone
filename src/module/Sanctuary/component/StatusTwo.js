// import React, { useState, useEffect } from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import axios from "axios";
// import TextField from '@mui/material/TextField';

// function searchFor(term) {
//   return function (x) {
//     return x.binomialName.toLowerCase().includes(term.toLowerCase()) || !term;
//   }
// }

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "teal",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   margin: "30px",
//   color: theme.palette.text.secondary,
// }));

// const Status = () => {
//   const [post, setPost] = useState("");
//   const [term, setTerm] = useState('');

//   useEffect(() => {
//     axios
//       .get(
//         "https://extinct-api.herokuapp.com/api/v1/animal/6"
//       )
//       .then((res) => {
//         console.log(res.data.data);
//         setPost(res.data.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//     const handleChange = (event) => {
//     console.log(event);
//     setTerm(event.target.value);
//   };


//   const postList =
//     post.length || post === undefined
//       ? post.filter(searchFor(term)).map((p) => {
//           return (
//             // <div>
//             <Grid
//               item
//               xs={2}
//               sm={4}
//               md={4}
//               key={p.id}
//               columns={{ xs: 4, sm: 8, md: 12 }}
//             >
//               <Item>
//                 <p style={{ fontWeight: "bold", fontSize: "30px" }}>
//                   {p.binomialName}
//                 </p>
//                 <img
//                   src={p.imageSrc}
//                   alt="recipe-data"
//                   className="recipe-image"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     objectFit: "cover",
//                     borderRadius: "15px",
//                     margin: "5px",
//                   }}
//                 />
//                 <div className="type">
//                   <p style={{ fontSize: "18px" }}>
//                     <div style={{ color: "brown" }}>Description:</div>{" "}
//                     {p.shortDesc}
//                   </p>
//                 </div>
//                 <a href={p.wikiLink} target="_bank">URL</a>
//               </Item>
//             </Grid>
//             // </div>
//           );
//         })
//       : "No content";

//   return (
//     <div
//       style={{
//         textAlign: "center",
//       }}
//     >
//       <div style={{ fontWeight: "bold", fontSize: "35px" , background: "yellow"}}>Animals</div>
//       <TextField
//           style={{ marginTop: "20px", width:"500px", height:"100"}}
//           placeholder="Search Animal"
//           id="search"
//           name="search"
//           type="text"
//           value={term}
//           onChange={handleChange}
//           className="input"
//         >
//           </TextField>
//       <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//       >
//         {postList}
//       </Grid>
//     </div>
//   );
// };

// export default Status;


import React, { Component } from 'react'
class StatusTwo extends Component{
render(){
    return(
        <div>Hi</div>
    )
}
}
export default StatusTwo;
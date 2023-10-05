import { Container, Grid } from "@mui/material";
import React from "react";

export default function WhatIs() {
  return (
    <Container maxWidth="false" className="whatIsContainer">
      <h1>What is school</h1>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-1"
        >
          <img
            src="https://opuspeoplesolutions.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMG1jSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ff76dc3e37c2b0a25095c3d0622f0ed47e55ed7c/Blog%20Pic%20(1).png"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-2"
        >
          <img
            src="https://opuspeoplesolutions.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMG1jSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ff76dc3e37c2b0a25095c3d0622f0ed47e55ed7c/Blog%20Pic%20(1).png"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-3"
        >
          <img
            src="https://opuspeoplesolutions.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMG1jSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--ff76dc3e37c2b0a25095c3d0622f0ed47e55ed7c/Blog%20Pic%20(1).png"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
      </Grid>
    </Container>
  );
}

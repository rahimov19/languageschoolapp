import { Container, Grid } from "@mui/material";
import React from "react";

export default function WhatIs() {
  return (
    <Container maxWidth="false" className="whatIsContainer">
      <h1>What is school</h1>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={4} className="whatIsCard">
          <img
            src="https://bridge.edu/tefl/blog/wp-content/uploads/2020/07/IMG_5204.jpg"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
        <Grid xs={12} sm={12} md={4} className="whatIsCard">
          <img
            src="https://bridge.edu/tefl/blog/wp-content/uploads/2020/07/IMG_5204.jpg"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
        <Grid xs={12} sm={12} md={4} className="whatIsCard">
          <img
            src="https://bridge.edu/tefl/blog/wp-content/uploads/2020/07/IMG_5204.jpg"
            alt="cardImage"
          />
          <h4>Effective Lessons</h4>
          <p>Effective lessons to learn language</p>
        </Grid>
      </Grid>
    </Container>
  );
}

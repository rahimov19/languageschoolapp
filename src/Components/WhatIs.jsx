import { Container, Grid } from "@mui/material";
import React from "react";

export default function WhatIs() {
  return (
    <Container maxWidth="false" className="whatIsContainer">
      <h1>What is Melting Pot Language School?</h1>
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-1"
        >
          <img src="/individual.jpg" alt="cardImage" />
          <h4>Personalized Learning Experience:</h4>
          <p>
            "Tailored to Your Success" Highlight your school's commitment to
            providing personalized language instruction. Emphasize the
            individualized attention each student receives, custom-tailored
            lesson plans, and progress tracking to ensure their language
            learning journey is optimized for success.
          </p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-2"
        >
          <img src="/native2.jpg" alt="cardImage" />
          <h4>Certified Native Instructors:</h4>
          <p>
            "Learn from the Pros" Showcase your school's team of highly
            qualified and certified native-speaking instructors. Explain how
            learning from experts in the language offers students an authentic,
            immersive experience that goes beyond textbooks and grammar rules.
          </p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={4}
          className="whatIsCard animate glow delay-3"
        >
          <img src="/smallGroup2.jpg" alt="cardImage" />
          <h4>Flexible Learning Options:</h4>
          <p>
            "Learn on Your Terms" Highlight the flexibility of your language
            courses, offering options for both group and individual learning.
            Mention varied course lengths and schedules to accommodate different
            lifestyles, making it convenient for students to pursue language
            learning at their own pace.
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}

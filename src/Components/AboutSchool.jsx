import { Container, Grid } from "@mui/material";
import React from "react";

export default function AboutSchool() {
  return (
    <Container className="aboutSchoolContainer" maxWidth="false">
      <h1 className="aboutSchoolH1">Does this school ok?</h1>
      <Grid container>
        <Grid xs={12} sm={12} md={6} className="textGrid">
          <h3>Some text</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img
            className="aboutSchoolImg"
            src="https://www.fsagames.com/wp-content/uploads/2019/07/shutterstock_594891590.jpg"
            alt=""
          />
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img
            className="aboutSchoolImg"
            src="https://www.fsagames.com/wp-content/uploads/2019/07/shutterstock_594891590.jpg"
            alt=""
          />
        </Grid>
        <Grid ml={2} xs={12} sm={12} md={5} className="textGrid">
          <h3>Some text</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>

        <Grid xs={12} sm={12} md={6} className="textGrid">
          <h3>Some text</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img
            className="aboutSchoolImg"
            src="https://www.fsagames.com/wp-content/uploads/2019/07/shutterstock_594891590.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
}

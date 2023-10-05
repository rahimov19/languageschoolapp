import { Container, Grid } from "@mui/material";
import React, { useState } from "react";

export default function AboutSchool() {
  const [rerender, setRerender] = useState(true);
  let observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-right");
        setRerender(!rerender);
      } else {
        entry.target.classList.remove("slide-right");
        setRerender(!rerender);
      }
    });
  });
  const listRight = document.querySelectorAll(".right");
  listRight.forEach((el) => {
    observerRight.observe(el);
  });

  let observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-left");
        // setRerender(!rerender);
        console.log(".");
      } else {
        entry.target.classList.remove("slide-left");
        // setRerender(!rerender);
      }
    });
  });
  const listLeft = document.querySelectorAll(".left");
  listLeft.forEach((el) => {
    observerLeft.observe(el);
  });

  return (
    <Container className="aboutSchoolContainer" maxWidth="false">
      <h1 className="aboutSchoolH1">Does this school ok?</h1>
      <Grid container>
        <Grid xs={12} sm={12} md={6} className="right textGrid ">
          <h3>Some text 111</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>
        <Grid xs={12} sm={12} md={6} className="right ">
          <img
            className="aboutSchoolImg"
            src="https://www.fsagames.com/wp-content/uploads/2019/07/shutterstock_594891590.jpg"
            alt=""
          />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className="left slide-left "
          sx={{ order: { xs: 3, md: 2 } }}
        >
          <img
            className="aboutSchoolImg"
            src="https://www.fsagames.com/wp-content/uploads/2019/07/shutterstock_594891590.jpg"
            alt=""
          />
        </Grid>
        <Grid
          ml={2}
          xs={12}
          sm={12}
          md={5}
          className="textGrid left slide-left "
          sx={{ order: { xs: 2, md: 3 } }}
        >
          <h3>Some text222</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          className="textGrid right"
          sx={{ order: { xs: 1, md: 2 } }}
        >
          <h3>Some text333</h3>
          <p>We are making this text bla bla bla</p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className=" right"
          sx={{ order: { xs: 1, md: 3 } }}
        >
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

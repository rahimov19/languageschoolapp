import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function AboutSchool() {
  const [rerender, setRerender] = useState(true);
  useEffect(() => {
    let observerRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-right");
          console.log(".");
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
          console.log(".");
          entry.target.classList.add("slide-left");
          setRerender(!rerender);
        } else {
          entry.target.classList.remove("slide-left");
          setRerender(!rerender);
        }
      });
    });
    const listLeft = document.querySelectorAll(".left");
    listLeft.forEach((el) => {
      observerLeft.observe(el);
    });
  }, []);

  return (
    <Container className="aboutSchoolContainer" maxWidth="false" id="aboutUs">
      <h1 className="aboutSchoolH1">Why Melting Pot?</h1>
      <Grid container>
        <Grid xs={12} sm={12} md={6} className="right textGrid ">
          <h3>Small groups</h3>
          <p>
            We offering small groups (max 4 person) to give most of teachers
            attention
          </p>
        </Grid>
        <Grid xs={12} sm={12} md={6} className="right ">
          <img className="aboutSchoolImg" src="/smallGroup.jpg" alt="" />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className="left slide-left "
          sx={{ order: { xs: 3, md: 2 } }}
        >
          <img className="aboutSchoolImg" src="/credit.jpg" alt="" />
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className="textGrid left slide-left "
          sx={{ order: { xs: 2, md: 3 }, pr: 2 }}
        >
          <h3>Native speakers</h3>
          <p>
            All our teacher are native speakers, which will give you all small
            details of language to learn
          </p>
        </Grid>

        <Grid
          xs={12}
          sm={12}
          md={6}
          className="textGrid right"
          sx={{ order: { xs: 1, md: 2 }, pl: 2 }}
        >
          <h3>Credit scoring</h3>
          <p>
            No monthly fee, only credits that you can spend on different type of
            lessons (individual lesson, group lesson or interactive lesson)
          </p>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          className=" right"
          sx={{ order: { xs: 1, md: 3 } }}
        >
          <img className="aboutSchoolImg" src="/native.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
}

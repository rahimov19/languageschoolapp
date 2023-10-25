import { Button, Container, Grid } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Container className="footerContainer" maxWidth="false">
      <Grid container>
        <Grid xs={12} className="logoFooter">
          <img src="/logo.png" alt="" />
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <p>
            "We're dedicated to helping you unlock a world of opportunities
            through language mastery. Join us in your journey to language
            fluency and experience the transformative power of communication."
          </p>
        </Grid>
        <Grid xs={6} md={4} xl={2} className="footerMenu" pl={2}>
          <div>
            <h4>Company</h4> <a href="asd">About Us</a> <a href="asd">Blog</a>
          </div>
        </Grid>
        <Grid xs={6} md={4} xl={2} className="footerMenu">
          <div>
            <h4>Languages</h4> <a href="asd">Russian</a>{" "}
            <a href="asd">English</a>
          </div>
        </Grid>
        <Grid xs={6} md={4} xl={2} className="footerMenu">
          <div>
            <h4>Company</h4> <a href="#aboutUs">About Us</a>{" "}
            <a href="asd">Blog</a>
          </div>
        </Grid>
        <Grid xs={6} md={4} xl={2} className="footerMenu">
          <div>
            <h4>Contacts</h4> <a href="#faq">FAQ</a>{" "}
            <a href="asd">Contact Us</a>{" "}
            <Button className="bn5" sx={{ mt: 2 }}>
              Become a teacher
            </Button>
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          Rudaki ave. 155 (Rudaki Plaza) 5th Floor. 734003 Dushanbe
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          right information confidentialitiy etc links
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          Social links
        </Grid>
      </Grid>
    </Container>
  );
}

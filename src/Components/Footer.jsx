import { Button, Container, Grid } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Container className="footerContainer" maxWidth="false">
      <Grid container>
        <Grid xs={12} className="logoFooter">
          <h2>Logo</h2>
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            quisquam voluptas placeat quo rerum fugiat voluptate exercitationem,
            nemo quae perferendis magni enim dolorum in veritatis provident,
            consectetur at velit numquam.
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
            <h4>Company</h4> <a href="asd">About Us</a> <a href="asd">Blog</a>
          </div>
        </Grid>
        <Grid xs={6} md={4} xl={2} className="footerMenu">
          <div>
            <h4>Contacts</h4> <a href="asd">FAQ</a> <a href="asd">Contact Us</a>{" "}
            <Button className="bn5" sx={{ mt: 2 }}>
              Become a teacher
            </Button>
          </div>
        </Grid>
        <Grid xs={12} md={6} lg={4} mt={2}>
          Adress Some str 123 12322
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

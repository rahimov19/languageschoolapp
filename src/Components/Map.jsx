import { Container, Grid } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <Container maxWidth={false} className="mapContainer">
      <Grid>
        <h2>How to find us</h2>
      </Grid>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid className="mapGrid" xs={12} md={8} lg={6} xl={5}>
          <img
            src="https://www.mapsofindia.com/images2/india-map-2019.jpg"
            alt="map"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

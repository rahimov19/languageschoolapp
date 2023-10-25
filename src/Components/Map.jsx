import { Box, Container, Grid } from "@mui/material";
import React from "react";

export default function Map() {
  return (
    <Container maxWidth={false} className="mapContainer">
      <Grid>
        <h2>How to find us</h2>
      </Grid>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <h3>You can find us at Rudaki Plaza (5th floor)</h3>
      </Box>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid className="mapGrid" xs={12} md={8} lg={6} xl={5}>
          <img src="/map.png" alt="map" />
        </Grid>
      </Grid>
    </Container>
  );
}

import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";

export default function TopBanner() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const imageBackgrounds = {
    english:
      "https://www.worldatlas.com/r/w1200/upload/c7/28/32/untitled-design-207.jpg",
    german:
      "https://study-eu.s3.amazonaws.com/uploads/image/path/46/wide_fullhd_15317597976_b86a01bd5e_o.jpg",
    russian:
      "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg",
    french:
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/506000/506659-eiffel-tower.jpg",
  };
  return (
    <Container
      maxWidth="false"
      className="bannerContainer"
      style={{
        background: `url(${imageBackgrounds[selectedLanguage]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid xs={12} md={8} lg={6} className="gridBanner">
        <h2>Learn language</h2>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ mr: 1 }} />
          <p sx={{ textAlign: "center" }}>Offline</p>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ mr: 1 }} />
          <p sx={{ textAlign: "center" }}>individual</p>
        </Grid>{" "}
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ mr: 1 }} />
          <p sx={{ textAlign: "center" }}> free test lesson</p>
        </Grid>
        <Grid className="languageSelect">
          <FormControl>
            <InputLabel id="demo-simple-select-label">
              Select Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedLanguage}
              label="Age"
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <MenuItem value={"english"}>English</MenuItem>
              <MenuItem value={"russian"}>Russian</MenuItem>
              <MenuItem value={"german"}>German</MenuItem>
              <MenuItem value={"french"}>French</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained">Start Learning</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

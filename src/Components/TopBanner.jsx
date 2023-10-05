import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import React, { useState } from "react";
import RegistrationModal from "./RegistrationModal";

export default function TopBanner() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const imageBackgrounds = {
    english: "https://www.england.de/images/headers/london/london-england.jpg",
    german:
      "https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/iStock_000049394172_istock.com_Mapics_DL_PPT_0.jpg?h=5f29f7b4&itok=f6oEBbNz",
    russian:
      "https://www.state.gov/wp-content/uploads/2018/11/Russia-2499x1406.jpg",
    french:
      "https://study-eu.s3.amazonaws.com/uploads/image/path/97/wide_fullhd_france-paris-eiffel-tower.jpg",
  };
  let theme = createTheme({});
  theme = createTheme(theme, {
    palette: {
      salmon: theme.palette.augmentColor({
        color: {
          main: "#2e31f5e2",
        },
        name: "salmon",
      }),
      fish: theme.palette.augmentColor({
        color: {
          main: "#000000",
        },
        name: "fish",
      }),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container
        key={imageBackgrounds[selectedLanguage]}
        maxWidth="false"
        className="bannerContainer"
        style={{
          background: `url(${imageBackgrounds[selectedLanguage]})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid xs={12} md={8} lg={6} className="gridBanner" item>
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
          <Grid className="languageSelect" container>
            <Grid xs={12} md={8} sx={{ mb: 2 }} item>
              <FormControl
                color="fish"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                  "& .MuiFormControl-root": {
                    color: "white",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  Select Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedLanguage}
                  label="Language"
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <MenuItem value={"english"}>English</MenuItem>
                  <MenuItem value={"russian"}>Russian</MenuItem>
                  <MenuItem value={"german"}>German</MenuItem>
                  <MenuItem value={"french"}>French</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} md={4} item>
              <RegistrationModal />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

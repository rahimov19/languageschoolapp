import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Map() {
  const languagePack = {
    Russian: {
      howToFind: "Как нас найти",
      thatsHow:
        "Вы можете найти нас по адресу проспект Рудаки 155. Rudaki Plaza (5 этаж)",
    },
    Tajik: {
      howToFind: "Моро чӣ гуна бояд пайдо кард",
      thatsHow: "Шумо метавонед моро дар Рӯдакӣ Плаза (ошёна 5) пайдо кунед",
    },
    English: {
      howToFind: "How to find us",
      thatsHow: "You can find us at Rudaki ave. 127. Rudaki Plaza (5th floor)",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  return (
    <Container maxWidth={false} className="mapContainer" id="map">
      <Grid>
        <h2>{languagePack[language].howToFind}</h2>
      </Grid>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <h3>{languagePack[language].thatsHow}</h3>
      </Box>
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid className="mapGrid" xs={12} md={8} lg={6} xl={5}>
          <a
            href="https://www.google.com/maps/@38.59625,68.7863696,21z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/map.png" alt="map to our school" />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

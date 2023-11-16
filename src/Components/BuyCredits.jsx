import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import "../sass/BuyCredits.css"; // Import your CSS file
import { useSelector } from "react-redux";

const BuyCredits = () => {
  const languagePack = {
    Russian: {
      buyMore: "Покупайте больше, экономьте больше!",
      selectCredits: "Выберите кредитный пакет:",
      packagePrice: "Цена 1 кредита:",
      infoText:
        "Система кредитов позволяет посещать нашу школу независимо от расписания. Учить язык каждый день? Три раза в неделю или раз в неделю? Решать вам!",
      Credits: "Кредит(ов)",
      button: "Приобретите свои кредиты сейчас!",
    },
    Tajik: {
      buyMore: "Зиёдатар харед, бештар захира кунед!",
      selectCredits: "Бастаи кредитиро интихоб кунед:",
      packagePrice: "Нархи 1 кредит:",
      infoText:
        "Системаи кредитӣ ба шумо имкон медиҳад, ки новобаста аз ҷадвали худ дар мактаби мо таҳсил кунед. Ҳар рӯз забон омӯзед? Се маротиба дар як ҳафта ё як маротиба дар як ҳафта? Аз худат вобаста аст!",
      Credits: "Кредит",
      button: "Кредитҳои худро ҳозир харед!",
    },
    English: {
      buyMore: "Buy More, Save More!",
      selectCredits: "Select Credit Package:",
      packagePrice: "Price for 1 Credit:",
      infoText:
        "The credit system allows you to attend our school regardless of your schedule. Learn a language every day? Three times a week or once a week? It's up to you!",
      Credits: "Credits",
      button: "Get your credits now!",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [selectedPackage, setSelectedPackage] = useState("1-5");
  const creditPackages = [
    { credits: "1-5", price: 200 },
    { credits: "5-10", price: 180 },
    { credits: "10-20", price: 150 },
    { credits: "20-50", price: 120 },
    { credits: "50+", price: 100 },
  ];

  const handleChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const selectedPackageData = creditPackages.find(
    (packageItem) => packageItem.credits === selectedPackage
  );

  return (
    <Container className="center-container" sx={{ p: 2 }} id="pricing">
      <Paper elevation={3} className="paper">
        <Typography variant="h4" gutterBottom>
          {languagePack[language].buyMore}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              {languagePack[language].creditPackages}
            </Typography>
            <Select
              value={selectedPackage}
              onChange={handleChange}
              fullWidth
              className="select"
            >
              {creditPackages.map((packageItem) => (
                <MenuItem key={packageItem.credits} value={packageItem.credits}>
                  {`${packageItem.credits} ${languagePack[language].Credits}`}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              {languagePack[language].packagePrice}
            </Typography>
            <Typography className="package-price">
              {`${selectedPackageData ? selectedPackageData.price : ""} TJS`}
            </Typography>
          </Grid>
        </Grid>
        <Typography paragraph className="package-info" sx={{ mt: 2 }}>
          {languagePack[language].infoText}
        </Typography>
        <button className="bn13">
          {" "}
          <a href="tel:+992982700005">{languagePack[language].button}</a>{" "}
        </button>
      </Paper>
    </Container>
  );
};

export default BuyCredits;

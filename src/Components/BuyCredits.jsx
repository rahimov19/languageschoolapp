import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import "../sass/BuyCredits.css"; // Import your CSS file
import { useSelector } from "react-redux";

const BuyCredits = () => {
  const languagePack = {
    Russian: {
      buyMore: "Новая система оплаты занятий:",
      packagePrice: "Цена за 1 занятие:",
      infoText:
        "Каждое приобретенное занятие гарантирует вам его посещение вне зависимо от времени, дня и языка",
      button: "Начните свое первое занятие сейчас!",
      group: "1 Групповое занятие",
      individual: "1 Индивидуальное занятие",
    },
    Tajik: {
      buyMore: "Системаи нави пардохт барои дарсҳо:",
      packagePrice: "Нарх барои 1 дарс:",
      infoText:
        "Ҳар як дарси харидашуда ба шумо новобаста аз вақт, рӯз ва забон иштирок карданро кафолат медиҳад",
      button: "Дарси аввалини худро ҳозир оғоз кунед!",
      group: "1 Дарси гурӯҳи",
      individual: "1 дарси инфиродӣ",
    },
    English: {
      buyMore: "New payment system for classes:",
      packagePrice: "Price for 1 lesson:",
      infoText:
        "Each lesson purchased guarantees you attendance regardless of time, day or language",
      button: "Start your first lesson now!",
      group: "1 Group lesson",
      individual: "1 Individual lesson",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [selectedPackage, setSelectedPackage] = useState("group");
  const creditPackages = [
    { credits: "group", price: 100, name: languagePack[language].group },
    {
      credits: "individual",
      price: 200,
      name: languagePack[language].individual,
    },
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
                  {`${packageItem.name}`}
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

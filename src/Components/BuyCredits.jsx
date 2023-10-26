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
      buyMore: "Покупайте больше, экономьте больше!",
      selectCredits: "Выберите кредитный пакет:",
      packagePrice: "Цена пакета:",
      infoText:
        "Приобретайте больше кредитов, чтобы сэкономить! Чем больше кредитный пакет, тем дешевле становится каждый кредит. Воспользуйтесь нашими экономичными пакетами уже сегодня.",
      Credits: "Кредит(ов)",
    },
    Tajik: {
      buyMore: "Зиёдатар харед, бештар захира кунед!",
      selectCredits: "Бастаи кредитиро интихоб кунед:",
      packagePrice: "Нархи баста:",
      infoText:
        "Барои сарфаи пул қарзҳои бештар харед! Ҳар қадаре ки бастаи кредитӣ калон бошад, ҳар як кредит ҳамон қадар арзонтар мешавад. Имрўз аз бастаҳои камхарҷи мо баҳра баред.",
      Credits: "Кредит",
    },
    English: {
      buyMore: "Buy More, Save More!",
      selectCredits: "Select Credit Package:",
      packagePrice: "Package Price:",
      infoText:
        "Purchase more credits to save money! The larger the credit package, the cheaper each credit becomes. Take advantage of our cost-effective packages today.",
      Credits: "Credits",
    },
  };
  const language = useSelector((state) => state.languages.currentLanguage);
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to the 1 credit package
  const creditPackages = [
    { credits: 1, price: 5 },
    { credits: 3, price: 13 },
    { credits: 5, price: 20 },
    { credits: 10, price: 35 },
  ];

  const handleChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const selectedPackageData = creditPackages.find(
    (packageItem) => packageItem.credits === selectedPackage
  );

  return (
    <Container className="center-container" sx={{ p: 2 }}>
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
              {`$${selectedPackageData ? selectedPackageData.price : ""}`}
            </Typography>
          </Grid>
        </Grid>
        <Typography paragraph className="package-info" sx={{ mt: 2 }}>
          {languagePack[language].infoText}
        </Typography>
      </Paper>
    </Container>
  );
};

export default BuyCredits;

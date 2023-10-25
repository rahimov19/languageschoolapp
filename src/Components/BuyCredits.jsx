import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import "../sass/BuyCredits.css"; // Import your CSS file

const BuyCredits = () => {
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
          Buy More, Save More!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Select Credit Package:</Typography>
            <Select
              value={selectedPackage}
              onChange={handleChange}
              fullWidth
              className="select"
            >
              {creditPackages.map((packageItem) => (
                <MenuItem key={packageItem.credits} value={packageItem.credits}>
                  {`${packageItem.credits} Credits`}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Package Price:</Typography>
            <Typography className="package-price">
              {`$${selectedPackageData ? selectedPackageData.price : ""}`}
            </Typography>
          </Grid>
        </Grid>
        <Typography paragraph className="package-info" sx={{ mt: 2 }}>
          Purchase more credits to save money! The larger the credit package,
          the cheaper each credit becomes. Take advantage of our cost-effective
          packages today.
        </Typography>
      </Paper>
    </Container>
  );
};

export default BuyCredits;

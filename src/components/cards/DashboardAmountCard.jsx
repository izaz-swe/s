import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import * as React from 'react';
import taka from "../../assets/taka.png";

const DashboardAmountCard = ({ amountText, amount, cardColor }) => {
  return (
    <Card sx={{ position: "relative", backgroundColor: cardColor }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: "white" }}>
          {amountText}
        </Typography>
        <Typography variant="h4" sx={{ my: 2, color: "white" }}>
          {amount}
        </Typography>
        <Button size="small" variant="contained">
          View Sales
        </Button>
        <Box component="img" src={taka} sx={{
          right: 36,
          bottom: 20,
          height: 50,
          position: "absolute"
        }}/>
      </CardContent>
    </Card>
  );
};

export default DashboardAmountCard;

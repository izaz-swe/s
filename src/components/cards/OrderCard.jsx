import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const OrderCard = ({ text, count, cardColor, icon }) => {
  return (
    <Card
      sx={{ display: "flex", alignItems: "center", backgroundColor: cardColor }}
    >
      <CardMedia
        sx={{
          width: "30%",
          display: "flex",
          justifyContent: "center", // Center icon horizontally
          alignItems: "center",
          padding: "1em", // Add some padding for visual balance
        }}
      >
        {icon}
      </CardMedia>
      <CardContent>
        <Typography variant="h6" sx={{ color: "white" }}>
          {text}
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderCard;

import React from "react";
import TitleCard from "../../../components/cards/TitleCard";
import { Grid, Skeleton } from "@mui/material";

function OrderSkeleton() {
  return (
    <TitleCard title="Status ....">
      <Skeleton height={56} variant="rectangular" sx={{ margin: "10px 0px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton height={56} variant="rectangular" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton height={56} variant="rectangular" />
        </Grid>
      </Grid>
    </TitleCard>
  );
}

export default OrderSkeleton;

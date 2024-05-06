import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { getOfferDetails } from "../../state/reducers/offer/offerSlice";
import { useParams } from "react-router-dom";

const OfferDetails = () => {
  const dispatch = useDispatch();
  const {offerId} = useParams();
  useEffect(()=> {
    dispatch(getOfferDetails(offerId));
  }, [dispatch,offerId]);
  const { offerDetails } = useSelector((state) => state.offer);
  return (
    <div>
      {offerDetails ? (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                image={offerDetails?.image}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {offerDetails?.offerName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Cash On Delivery: {offerDetails?.cashOnDelivery ? "Yes" : "No"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Sold By: {offerDetails?.farmerDetails?.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Mobile: {offerDetails?.farmerDetails?.phone}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ pr: "10px" }}>
                  Price:{" "}
                </Typography>
                <Typography>
                  {offerDetails?.price} / {offerDetails?.unit}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ pr: "10px" }}>
                  Weight:{" "}
                </Typography>
                <Typography>
                  {offerDetails?.weight} {offerDetails?.unit}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "10px",
                }}
              >
                <Button variant="contained">Order</Button>
                <Button variant="contained" sx={{ bgcolor: "#8A2BE2" }}>
                  Offer Price
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OfferDetails;

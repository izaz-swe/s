import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOffers } from "../../state/reducers/offer/offerSlice";
import OfferCard from "./OfferCard";

const Home = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offer.homeOffers);
  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);
  return (
    <div>
      <Grid container spacing={3}>
        {offers.map((offer) => (
          <Grid item xs={5} sm={5} md={4} key={offer._id}>
            <OfferCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

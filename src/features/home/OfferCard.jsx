import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { getOfferDetails } from "../../state/reducers/offer/offerSlice";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ offer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getOfferDetails(offer.offerId));
    navigate("/app/buyer/offer-details")
  };
  return (
    <Card sx={{ maxHeight: 300 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{ maxHeight: 150, minHeight: 150 }}
          image={offer.image}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {offer.offerName}
          </Typography>
          <Typography variant="body1" color="green">{offer.price}$ / {offer.unit}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Order</Button>
        <Button size="small">Offer Price</Button>
      </CardActions>
    </Card>
  );
};

export default OfferCard;

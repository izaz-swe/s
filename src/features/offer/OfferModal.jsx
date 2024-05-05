import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OfferModalSkeleton from "./OfferModalSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, makeOffer } from "../../state/reducers/offer/offerSlice";
import { CloudUpload } from "@mui/icons-material";

const OfferModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const isLoading = false;
  const [checked, setChecked] = useState(true);
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    offerName: "",
    unit: "",
    weight: "",
    price: "",
  });
  const [category, setCategory] = useState({ categoryName: "", _id: "" });
  const { token } = useSelector((state) => state.user.user);
  const { categories, offerCreated } = useSelector((state) => state.offer);
  useEffect(()=> {
    dispatch(getCategories());
  }, [dispatch])
  const handleChangeCategory = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(
      (cat) => cat._id === selectedCategoryId
     );
     setCategory(selectedCategory);
  };
  
  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  
  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = new FormData();
    response.append("offerName", formData.offerName);
    response.append("unit", formData.unit);
    response.append("weight", formData.weight);
    response.append("price", formData.price);
    response.append("image", image);
    response.append("cashOnDelivery", checked);
    response.append("categoryId", category._id);
    response.append("totalPrice", formData.price * formData.weight);
    dispatch(makeOffer({ token, offer: response }));

    handleClose();
  };
  return (
    <Paper sx={{ padding: "20px" }}>
      {isLoading ? (
        <OfferModalSkeleton />
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="productName"
                label="Product Name"
                required
                fullWidth
                value={formData.offerName}
                onChange={(e) =>
                  handleInputChange("offerName", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  name="category"
                  value={category._id}
                  onChange={handleChangeCategory}
                  required
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat._id} value={cat._id}>
                      {cat.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="unit"
                label="Unit"
                required
                fullWidth
                value={formData.unit}
                onChange={(e) => handleInputChange("unit", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="weight"
                label="Weight"
                required
                fullWidth
                value={formData.weight}
                onChange={(e) => handleInputChange("weight", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="price"
                label="Price Per Unit"
                required
                fullWidth
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} alignItems="center">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Cash On Delivery"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUpload/>} sx={{bgcolor: '#4615b2'}}>
              Upload Crop Image
              <input
                  hidden
                  type="file"
                  name="image"
                  onChange={handleImageUpload}
                  accept="image/png,image/jpeg, image/jpg"
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Purchase
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Paper>
  );
};

export default OfferModal;

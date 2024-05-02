import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  privateGet, privatePostFile, publicGet } from "../../../utils/apiCaller";
const initialState = {
  categories: [],
  offers: [],
  isLoading: false,
  error: false,
  success: false,
  errorMessage: '',
  offerCreated: false,
}
export const makeOffer = createAsyncThunk(
  "offer/makeOffer",
  async ({token, offer}, {rejectWithValue}) => {
    try {
      const response = await privatePostFile("/offer/create", token, offer);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCategories = createAsyncThunk(
  "offer/getCategories",
  async (offer, {rejectWithValue}) => {
    try {
      const categories = await publicGet("/offer/categories");
      return categories;
    } catch (error) {
      return rejectWithValue(err);
    }
  }
)
export const getOffers = createAsyncThunk(
  "offer/getOffers",
  async ({userId, token}, {rejectWithValue}) => {
    try {
      const response = await privateGet(`offer/offers/${userId}`, token);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
)
const offerSlice = createSlice({
  name: "offer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(makeOffer.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(makeOffer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        // state.errorMessage = action.payload.message;
      })
      .addCase(makeOffer.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offerCreated = true
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.categories = action.payload.data; 
      })
      .addCase(getOffers.pending, (state)=> {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOffers.rejected, (state, action)=> {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.response;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offers = action.payload.data; 
      })
  }
});
export default offerSlice.reducer;
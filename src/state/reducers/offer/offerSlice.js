import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  privateGet,
  privatePostFile,
  privatePut,
  publicGet,
} from "../../../utils/apiCaller";
const initialState = {
  categories: [],
  offers: [],
  homeOffers: [],
  offerDetails: {},
  relatedOffers: [],
  isLoading: false,
  error: false,
  success: false,
  errorMessage: "",
  offerCreated: false,
  offerDeleted: false,
};
export const makeOffer = createAsyncThunk(
  "offer/makeOffer",
  async ({ token, offer }, { rejectWithValue }) => {
    try {
      const response = await privatePostFile("/offer/create", token, offer);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const updateOffer = createAsyncThunk(
  "offer/updateOffer",
  async ({ token, body }, { rejectWithValue }) => {
    try {
      const response = await privatePut("/offer/delete", token, body);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getCategories = createAsyncThunk(
  "offer/getCategories",
  async () => {
    try {
      const categories = await publicGet("/offer/categories");
      return categories;
    } catch (error) {
      return err;
    }
  }
);
export const getOffersByUserId = createAsyncThunk(
  "offer/getOffersByUserId",
  async ({ userId, token }, { rejectWithValue }) => {
    try {
      const response = await privateGet(`offer/offers/${userId}`, token);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getOffers = createAsyncThunk("offer/getOffers", async () => {
  try {
    const response = await publicGet("/offer/offers");
    return response;
  } catch (err) {
    return err;
  }
});
export const getOfferDetails = createAsyncThunk(
  "offer/getOfferDetails",
  async (offerId) => {
    try {
      const offerDetails = await publicGet(`/offer/offer-details/${offerId}`);
      return offerDetails;
    } catch (err) {
      return err;
    }
  }
);
export const getRelatedOffers = createAsyncThunk(
  "offer/getRelatedOffers",
  async (categoryId) => {
    try {
      const offers = await publicGet(`/offer/related/${categoryId}`);
      return offers;
    } catch (err) {
      return err;
    }
  }
);
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
        state.errorMessage = action.payload.message;
      })
      .addCase(makeOffer.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offerCreated = true;
      })
      .addCase(updateOffer.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(updateOffer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.payload.message;
      })
      .addCase(updateOffer.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offerDeleted = true;
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
      .addCase(getOffersByUserId.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
        state.offerDeleted = false;
      })
      .addCase(getOffersByUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.payload;
      })
      .addCase(getOffersByUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offers = action.payload.data;
      })
      .addCase(getOffers.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.message;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.homeOffers = action.payload.data;
      })
      .addCase(getOfferDetails.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOfferDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.payload;
      })
      .addCase(getOfferDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.offerDetails = action.payload.data;
      })
      .addCase(getRelatedOffers.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getRelatedOffers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errorMessage = action.payload;
      })
      .addCase(getRelatedOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.relatedOffers = action.payload.data;
      });
  },
});
export default offerSlice.reducer;

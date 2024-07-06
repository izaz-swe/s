import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { privateGet } from "../../../utils/apiCaller";

const initialState = {
  sales: {},
  orders: {},
  isLoading: false,
  error: false,
  success: false,
  errorMessage: "",
}
export const getSales = createAsyncThunk(
  "dashboard/getSales",
  async (token, {rejectWithValue}) => {
    try {
      const response = await privateGet("/dashboard/sales", token);
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  }
)
export const getOrderCount = createAsyncThunk(
  "dashboard/getOrderCount",
  async (token, {rejectWithValue})=> {
    try {
      const response = await privateGet("/dashboard/order", token);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
)
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getSales.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.success = false;
    })
    .addCase(getSales.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.success = false;
      state.errorMessage = action.message;
    })
    .addCase(getSales.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.success = true;
      state.sales = action.payload.data;
    })
    .addCase(getOrderCount.pending, (state) => {
      state.isLoading = true;
      state.error = false;
      state.success = false;
    })
    .addCase(getOrderCount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.success = false;
      state.errorMessage = action.message;
    })
    .addCase(getOrderCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = false;
      state.success = true;
      state.orders = action.payload.data;
    })
  }
})

export default dashboardSlice.reducer;
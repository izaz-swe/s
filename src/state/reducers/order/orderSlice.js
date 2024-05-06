import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privateDelete, privateGet, privatePost, privatePut, publicGet } from "../../../utils/apiCaller";
const initialState = {
  farmerOrders: [],
  buyerOrders: [],
  vehicles: [],
  orderRemoved: false,
  vehicleAssigned: false,
  orderDelivered: false,
  isLoading: false,
  error: false,
  success: false,
  errMessage: "",
};
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async ({ token, data }, { rejectWithValue }) => {
    try {
      const response = await privatePost("/order/create", token, data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getOrderByFarmerId = createAsyncThunk(
  "order/getOrderByFarmerId",
  async (token, {rejectWithValue}) => {
    try {
      const farmerOrders = await privateGet("/order/farmer", token);
      return farmerOrders;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const getOrderByBuyerId = createAsyncThunk(
  "order/getOrderByBuyerId",
  async (token, {rejectWithValue}) => {
    try {
      const buyerOrders = await privateGet("/order/buyer", token);
      return buyerOrders;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const deleteOrder = createAsyncThunk(
  "order/deleteOrder",
  async ({token, orderId}, {rejectWithValue}) => {
    try {
      const response = await privateDelete(`/order/${orderId}`, token);
      return response;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const assignVehicle = createAsyncThunk(
  "order/assignVehicle",
  async ({token, body}, {rejectWithValue}) => {
    try {
      const response = await privatePut("/order/vehicle", token, body);
      return response;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const orderDelivered = createAsyncThunk(
  "order/orderDelivered",
  async ({token, body}, {rejectWithValue}) => {
    try {
      const response = await privatePut("/order/received", token, body);
      return response;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const getAvailableVehicle = createAsyncThunk(
  "order/getAvailableVehicle",
  async ( ) => {
    try {
      const response = await publicGet("/vehicle/available");
      return response;
    } catch (error) {
      return error;
    }
  }
)
const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
      })
      .addCase(getOrderByFarmerId.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOrderByFarmerId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(getOrderByFarmerId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.farmerOrders = action.payload.data;
      })
      .addCase(getOrderByBuyerId.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getOrderByBuyerId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(getOrderByBuyerId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.buyerOrders = action.payload.data;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(deleteOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.orderRemoved = true;
      })
      .addCase(assignVehicle.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(assignVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(assignVehicle.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.vehicleAssigned = true;
      })
      .addCase(orderDelivered.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(orderDelivered.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(orderDelivered.fulfilled, (state) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.orderDelivered = true;
      })
      .addCase(getAvailableVehicle.pending, (state) => {
        state.isLoading = true;
        state.error = false;
        state.success = false;
      })
      .addCase(getAvailableVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.success = false;
        state.errMessage = action.payload.message;
      })
      .addCase(getAvailableVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.success = true;
        state.vehicles = action.payload.data;
      });
  },
});
export default orderSlice.reducer;

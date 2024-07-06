import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import regReducer from "./reducers/registerSlice";
import loginReducer from "./reducers/loginSlice";
import offerReducer from "./reducers/offer/offerSlice";
import orderSlice from "./reducers/order/orderSlice";
import dashboardSlice from "./reducers/dashboard/dashboardSlice";
const appReducer = combineReducers({
  reg: regReducer,
  user: loginReducer,
  offer: offerReducer,
  order: orderSlice,
  dashboard: dashboardSlice,
});

const rootReducer = (state, action) => {
  if(action.type === "user/logout"){
    state = {};
    storage.removeItem("persist:user");
  }

  return appReducer(state, action);
};

export default rootReducer;
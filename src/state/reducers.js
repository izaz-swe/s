import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import regReducer from "./reducers/registerSlice";
import loginReducer from "./reducers/loginSlice";
import offerReducer from "./reducers/offer/offerSlice";
const appReducer = combineReducers({
  reg: regReducer,
  user: loginReducer,
  offer: offerReducer,
});

const rootReducer = (state, action) => {
  if(action.type === "user/logout"){
    state = {};
    storage.removeItem("persist:user");
  }

  return appReducer(state, action);
};

export default rootReducer;
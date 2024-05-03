import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user", "offer"],
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
});

export const persistor = persistStore(store);
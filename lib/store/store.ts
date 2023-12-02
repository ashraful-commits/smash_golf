import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import HomeSlice from "../feature/HomeSlice";

const store = configureStore({
  reducer: {
    [HomeSlice.reducerPath]: HomeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(HomeSlice.middleware),
  devTools: true,
});

export default store;

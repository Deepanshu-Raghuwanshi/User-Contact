import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../reducers/UserSlice";
// import UserSlice from "./../reducers/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

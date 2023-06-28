import { configureStore } from "@reduxjs/toolkit";
import FavoritesReducer from "./slices/FavoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: FavoritesReducer,
  },
});

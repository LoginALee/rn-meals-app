import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesIds: [],
};

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favoritesIds = [...state.favoritesIds, action.payload.id];
    },
    removeFromFavorites: (state, action) => {
      state.favoritesIds = state.favoritesIds.filter((mealId) => mealId !==  action.payload.id);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = FavoritesSlice.actions;

export default FavoritesSlice.reducer;

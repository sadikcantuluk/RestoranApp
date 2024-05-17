import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    search: searchReducer,
  },
});

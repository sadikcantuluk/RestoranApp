import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

export const searchSlice = createSlice({
  name: "searh",
  initialState,
  reducers: {
    changeText: (state, action) => {
      state.text = action.payload.text;
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});

export default searchSlice.reducer;
export const { changeText,clearText } = searchSlice.actions;

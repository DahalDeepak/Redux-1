import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  width: "30px",
  height: "20px",
  padding: "30px",
  margin: "20px",
  backgroundColor: "red",
  borderRadius: "8%",
};

const BoxSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    changeWidth: (state, actions) => {
      state.width = actions.payload + "px";
    },
    changeHeight: (state, actions) => {
      state.height = actions.payload + "px";
    },
    changeBackgroundColor: (state, actions) => {
      state.backgroundColor = actions.payload;
    },
    changeMargin: (state, actions) => {
      state.margin = actions.payload + "px";
    },
    changeBorderRadius: (state, actions) => {
      state.borderRadius = "50%";
    },
  },
});

export const {
  changeWidth,
  changeHeight,
  changeBackgroundColor,
  changeBorderRadius,
  changeMargin,
} = BoxSlice.actions;
export default BoxSlice.reducer;

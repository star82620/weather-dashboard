import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  searchMode: boolean;
};

const initialState: InitialState = {
  searchMode: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateSearchModal: (state, action: PayloadAction<boolean>) => {
      state.searchMode = action.payload;
    },
  },
});

export const { updateSearchModal } = modalSlice.actions;

export default modalSlice.reducer;

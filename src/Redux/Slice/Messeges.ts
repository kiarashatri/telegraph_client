import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export type MessengesStateInterface = {
  id: number | null;
  islogin: boolean;
  accessToken: string | null;
};

// Define the initial state using that type
const initialState: MessengesStateInterface = {
  id: null,
  islogin: false,
  accessToken: null,
};

export const messengesSlice = createSlice({
  name: "messenge",
  initialState,
  reducers: {
    isLogin: (state) => {
      // state.islogin;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

export const { isLogin, incrementByAmount } = messengesSlice.actions;

export default messengesSlice.reducer;

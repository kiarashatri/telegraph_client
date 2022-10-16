import { Theme } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
type UserStateInterface = {
  id?: string;
  theme?: any;
  connection: boolean;
  accessToken?: string;
  biography?: string;
  family?: string;
  name?: string;
  username?: string;
  photo?: string;
};

// Define the initial state using that type
const initialState: UserStateInterface = {
  connection: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: () => initialState,
    setConnection: (state, action: PayloadAction<boolean>) => {
      state.connection = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setTheme: (state, action: PayloadAction<any>) => {
      state.theme = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setFamily: (state, action: PayloadAction<string>) => {
      state.family = action.payload;
    },
    setBiography: (state, action: PayloadAction<string>) => {
      state.biography = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
  },
});

export const {
  resetUser,
  setTheme,
  setConnection,
  setAccessToken,
  setId,
  setName,
  setFamily,
  setBiography,
  setUsername,
  setPhoto,
} = userSlice.actions;

export default userSlice.reducer;

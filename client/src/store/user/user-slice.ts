import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { errorMessage } from "../../types/user";

interface userType {
  user?: {};
  errors?: errorMessage;
  isLoggedIn?: boolean;
}
const initialState: userType = {
  user: {},
  errors: {},
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.errors = action.payload.errors;
    },
    login: (state, action: PayloadAction<userType>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

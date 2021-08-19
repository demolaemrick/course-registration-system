import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { errorMessage, User } from "../../types/user";

const cookies = new Cookies();

const token = cookies.get("accessToken")

interface userType {
  user?: User;
  errors?: errorMessage;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  hasCompleteProfile?: boolean;
}
const initialState: userType = {
  user: {} as User,
  errors: {},
  isLoggedIn: !!token,
  isLoading: false
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.errors = action.payload.errors;
    },
    authLoadStart: (state) => {
      state.isLoading = true;
    },
    login: (state, action: PayloadAction<userType>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {} as User;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

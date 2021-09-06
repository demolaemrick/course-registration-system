import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { RegisterValidationError, LoginValidationError, User } from "../../types/user";

const cookies = new Cookies();

const token = cookies.get("accessToken");

interface UserState {
  user?: User;
  registerValidationError?: RegisterValidationError;
  loginValidationError?: LoginValidationError;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  doesNotHaveCompleteProfile?: boolean;
  authError?: string | null
}
const initialState: UserState = {
  user: {} as User,
  registerValidationError: {},
  isLoggedIn: !!token,
  isLoading: false,
  doesNotHaveCompleteProfile: true,
  authError: null,
  loginValidationError: {}
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<UserState>) => {
      state.registerValidationError = action.payload.registerValidationError;
    },
    load: (state) => {
      state.isLoading = true;
    },
    loginStart: (state) => {
      state.isLoading = true;
    },
    login: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.doesNotHaveCompleteProfile =
        action.payload.doesNotHaveCompleteProfile;
    },
    loginFail: (state, action: PayloadAction<UserState>) => {
      state.authError = action.payload.authError || null;
      state.loginValidationError = action.payload.loginValidationError || {};
    },
    updateUserProfile: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
      state.doesNotHaveCompleteProfile =
        action.payload.doesNotHaveCompleteProfile;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {} as User;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

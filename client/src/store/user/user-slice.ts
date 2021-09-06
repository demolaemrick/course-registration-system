import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

import { RegisterValidationError, User } from "../../types/user";

const cookies = new Cookies();

const token = cookies.get("accessToken");

interface UserState {
  user?: User;
  registerValidationError?: RegisterValidationError;
  isLoggedIn?: boolean;
  isLoading?: boolean;
  doesNotHaveCompleteProfile?: boolean;
}
const initialState: UserState = {
  user: {} as User,
  registerValidationError: {},
  isLoggedIn: !!token,
  isLoading: false,
  doesNotHaveCompleteProfile: true,
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
    loginFail: (state, action: PayloadAction<UserState>) => {},
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

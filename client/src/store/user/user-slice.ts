import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { errorMessage } from "../../types/user";

interface userType {
  userId?: string | null;
  errors?: errorMessage;
}
const initialState: userType = {
  userId: null,
  errors: {},
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.errors = action.payload.errors;
    },
    login: (state, action: PayloadAction<userType>) => {
      state.userId = action.payload.userId;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

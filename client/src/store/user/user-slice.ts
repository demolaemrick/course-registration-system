import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { errorMessage } from "../../types/user";

interface userType {
  accessToken?: string | null;
  errors: errorMessage;
}
const initialState: userType = {
  accessToken: null,
  errors: {},
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.errors = action.payload.errors;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

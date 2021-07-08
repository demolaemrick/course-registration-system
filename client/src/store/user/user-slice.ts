import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { userType } from "../../types/user";

interface userType {
    accessToken: string | null;
}
const initialState: userType = {
    accessToken: null
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<userType>) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

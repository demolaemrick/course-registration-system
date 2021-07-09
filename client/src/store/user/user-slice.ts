import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userFormData } from "../../types/user";

// interface errorTypes {
//   errors: userFormData[];
// }

interface userType {
  accessToken?: string | null;
  errors: userFormData[];
}
const initialState: userType = {
  accessToken: null,
  errors: [],
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

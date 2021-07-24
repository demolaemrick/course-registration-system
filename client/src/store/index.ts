import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course/course-slice";
import userReducer from "./user/user-slice";

export const store = configureStore({
  reducer: {
    courseReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

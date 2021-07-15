import * as apis from "../../api";
import { userFormData, loginCredentials } from "../../types/user";
import { AppDispatch } from "../index";
import { userActions } from "./user-slice";
import { History } from "history";

export const register =
  (formData: userFormData, router: History) =>
  async (dispatch: AppDispatch) => {
    try {
      await apis.registerUser(formData);
      router.push("/login");
    } catch (err) {
      //   console.log(err.response.data);
      let errors = err.response.data.errors;
      errors = Object.assign({}, ...errors);
      dispatch(userActions.register({ errors }));
    }
  };

export const login =
  (credentials: loginCredentials, router: History) =>
  async (dispatch: AppDispatch) => {
    console.log(credentials);
    try {
      const {
        data: {
          user: { uuid: userId },
        },
      } = await apis.login(credentials);
      dispatch(userActions.login({ userId: userId }));
    } catch (err) {
      console.log(err.response.data);
    }
  };

export const getUser = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    const user = await apis.profile();
    const {
      data: {
        user: { uuid: userId },
      },
    } = await apis.profile();
    dispatch(userActions.login({ userId: userId }));
  } catch (err) {
    console.log(err.response.data);
  }
};

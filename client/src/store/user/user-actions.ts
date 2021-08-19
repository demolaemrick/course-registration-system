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
    try {
      const {
        data: { user },
      } = await apis.login(credentials);
      dispatch(userActions.login({ user }));
      router.push("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

export const checkUser = () => async (dispatch: AppDispatch) => {
  dispatch(userActions.authLoadStart)
  try {
    const {
      data: { user },
    } = await apis.profile();
    dispatch(userActions.login({ user }));
  } catch (err) {
    console.log(err.response.data);
  }
};

export const logout = (router: History) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await apis.logout();
    console.log(data);
    dispatch(userActions.logout());
    router.push('/')
  } catch (err) {
    console.log(err.response.data);
  }
};

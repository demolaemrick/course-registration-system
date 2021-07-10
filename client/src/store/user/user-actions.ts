import * as apis from "../../api";
import { userFormData, loginCredentials } from "../../types/user";
import { AppDispatch } from "../index";
import { userActions } from "./user-slice";
import { History } from "history";

export const register =
  (formData: userFormData, router: History) =>
  async (dispatch: AppDispatch) => {
    console.log(formData);
    try {
      await apis.registerUser(formData);
      router.push("/login");
    } catch (err) {
      console.log(err.response.data.errors);
      dispatch(userActions.register({ errors: err.response.data.errors }));
    }
  };

export const login =
  (credentials: loginCredentials, router: History) =>
  async (dispatch: AppDispatch) => {
    console.log(credentials);
    try {
      const response = await apis.login(credentials);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

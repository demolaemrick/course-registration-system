import * as apis from "../../api";
import { userFormData, loginCredentials, User } from "../../types/user";
import { AppDispatch } from "../index";
import { userActions } from "./user-slice";
import { History } from "history";

const checkIfUserHasCompleteProfile = (user: User) => {
  let doesNotHaveCompleteProfile = Object.values(user).some(
    (value) => value === null
  );

  return doesNotHaveCompleteProfile;
};

export const register =
  (formData: userFormData, router: History) =>
  async (dispatch: AppDispatch) => {
    try {
      await apis.registerUser(formData);
      router.push("/login");
    } catch (err) {
      let errors = err.response.data.errors;
      
      errors = Object.assign({}, ...errors);
      console.log("after conversion error", errors);
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

      let doesNotHaveCompleteProfile = checkIfUserHasCompleteProfile(user);
      dispatch(userActions.login({ user, doesNotHaveCompleteProfile }));

      router.push("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

export const checkUser = () => async (dispatch: AppDispatch) => {
  dispatch(userActions.authLoadStart);
  try {
    const {
      data: { user },
    } = await apis.profile();
    let doesNotHaveCompleteProfile = checkIfUserHasCompleteProfile(user);
    
    dispatch(userActions.login({ user, doesNotHaveCompleteProfile }));
  } catch (err) {
    console.log(err.response.data);
  }
};

export const logout = (router: History) => async (dispatch: AppDispatch) => {
  try {
    const { data } = await apis.logout();
    console.log(data);
    dispatch(userActions.logout());
    router.push("/");
  } catch (err) {
    console.log(err.response.data);
  }
};


export const updateUser = (userInfo: any, router: History) => async(dispatch: AppDispatch) => {
  try{
    const { data : user } = await apis.updateProfile(userInfo)

    let doesNotHaveCompleteProfile = checkIfUserHasCompleteProfile(user);
    dispatch(userActions.login({ user, doesNotHaveCompleteProfile }));
    router.push('/')
  }catch(err){
    console.log(err.response.data)
  }
}
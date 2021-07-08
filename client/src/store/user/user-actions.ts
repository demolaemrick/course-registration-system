import * as apis from '../../api'
import { userFormData } from "../../types/user"
import { AppDispatch } from "../index";
import { userActions } from "./user-slice"

export const register = (formData: userFormData) => async (dispatch: AppDispatch) => {
    console.log(formData)
    try{
        const response = await apis.registerUser(formData);
        console.log(response)
        // dispatch(userActions.register({accessToken: data.accessToken}))
    }catch(err){
        console.log(err.message)
    }
}
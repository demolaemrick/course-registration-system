import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";


const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.userReducer);

  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;

import { useDispatch } from "react-redux";
import Router from "./routes";
import { GlobalStyle } from "./styles/index";
import { useEffect, useState } from "react";
import { loginUser, logoutUser, userObject } from "./store/slices/loggedInUser";
import useApiRequest, { getMyProfileData } from "./axios/useApiRequest";

const App = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   console.log('main app')
  //   const token = window.localStorage.getItem("token");

  //   const verify = async () => {
  //     setIsLoading(true);

  //     try {
  //       await useApiRequest.post("/auth/token/verify/", { token: token});
  //       dispatch(loginUser(token));
  //       const user = await getMyProfileData(token);
  //       dispatch(userObject(user.data[0]))
  //     } catch (error) {
  //       window.localStorage.removeItem("token");
  //       dispatch(logoutUser());
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   token ? verify() : dispatch(logoutUser());
  // }, []);

  // if (!isLoading) {
  return (
    <>
    <GlobalStyle />
    <Router />
    </>
  );
}

export default App;

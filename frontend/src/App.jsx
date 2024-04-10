import { useDispatch } from "react-redux";
import Router from "./routes";
import { GlobalStyle } from "./styles/index";
import { useEffect } from "react";
import { loginUser, logoutUser } from "./store/slices/loggedInUser";
import useAutoFetch from "./axios/useAutoFetch";


const App = () => {
  const dispatch = useDispatch()
  const userData = JSON.parse(localStorage.getItem('user'))
  const accessToken = localStorage.getItem('auth-token')

  const {error, loading} = useAutoFetch('post', 'auth/token/verify', {token: accessToken})

  useEffect(() => {
    if(error === null){
      dispatch(loginUser({user: userData, accessToken: accessToken}))
    } else {
      dispatch(logoutUser())
      localStorage.clear()
    }
  }, [error, accessToken, dispatch, userData])

  if(loading) return <LoadingSpinner/>

  return (
    <>
    <GlobalStyle />
    <Router />
    </>
  );
}

export default App;

import logoImage from '../../../public/rocket.png'
import useLogout from '../../utils/useLogout'

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, logoutUser, userObject } from "../../store/slices/loggedInUser";
import useApiRequest, { getMyProfileData } from "../../axios/useApiRequest";

import {
  HeaderContainer,
  NavGroupLink,
  NavGroupLogo,
  NavItemText,
  NavLogoIcon,
  NavLogoText,
  NavLeftButton,
  NavRightButton,
  NavLinks,
  LogoutButton,
} from './styles'

const Header = () => {
  const isLoggedIn = localStorage.getItem('token')
  const logout = useLogout()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState('')

  useEffect(() => {
    console.log('main app')
    const token = window.localStorage.getItem("token");

    const verify = async () => {
      setIsLoading(true);

      try {
        await useApiRequest.post("/auth/token/verify/", { token: token});
        dispatch(loginUser(token));
        const user = await getMyProfileData(token);
        dispatch(userObject(user.data[0]))
        setUser(user.data[0])
      } catch (error) {
        window.localStorage.removeItem("token");
        dispatch(logoutUser());
      } finally {
        setIsLoading(false);
      }
    };
    token ? verify() : dispatch(logoutUser());
  }, []);

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderContainer>
      <NavGroupLogo to="/">
        <NavLogoIcon src={logoImage} alt="Luna logo" />
        <NavLogoText>LUNA</NavLogoText>
      </NavGroupLogo>

      <NavLinks>
        <NavGroupLink to="/">
          <NavItemText>Home</NavItemText>
        </NavGroupLink>

        <NavGroupLink to="/search">
          <NavItemText>Search</NavItemText>
        </NavGroupLink>

        {isLoggedIn ? (
          <NavGroupLink to={`/profile/${user.id}`}>
            <NavItemText>Profile</NavItemText>
          </NavGroupLink>
        ) : (
          <></>
        )}
      </NavLinks>

      {isLoggedIn ? (
        <LogoutButton
          role="button"
          tabIndex="0"
          onClick={handleLogout}
          onKeyPress={(e) => e.key === 'Enter' && handleLogout()}
        >
          Logout
        </LogoutButton>
      ) : (
        <div>
          <NavLeftButton to="/signup">SignUp</NavLeftButton>
          <NavRightButton to="/login">Login</NavRightButton>
        </div>
      )}
    </HeaderContainer>
  )
}

export default Header

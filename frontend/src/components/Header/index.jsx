import logoImage from '../../../public/rocket.png'
import useLogout from '../../utils/useLogout'

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
          <NavGroupLink to="/profile">
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

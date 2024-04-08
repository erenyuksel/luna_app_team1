import logoImage from '../../../public/rocket.png'

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
} from './styles'

// import DropDownMenu from './DropDownMenu'
// import { BaseDiv, ButtonBase } from '../../styles'

const Header = () => {
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

        <NavGroupLink to="/profile">
          <NavItemText>Profile</NavItemText>
        </NavGroupLink>
      </NavLinks>

      <div>
        <NavLeftButton to="/signup">SignUp</NavLeftButton>
        <NavRightButton to="/login">Login</NavRightButton>
      </div>
    </HeaderContainer>
  )
}

export default Header

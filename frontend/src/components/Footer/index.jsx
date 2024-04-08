import React from 'react'
import { FooterContainer } from './styles'
import {
  NavGroupLink,
  NavGroupLogo,
  NavItemText,
  NavLinks,
  NavLogoText,
} from '../Header/styles'

function Footer() {
  return (
    <FooterContainer>
      <NavLinks>
        <NavGroupLink to="/">
          <NavItemText>About Us</NavItemText>
        </NavGroupLink>

        <NavGroupLink to="/">
          <NavItemText>Press</NavItemText>
        </NavGroupLink>

        <NavGroupLink to="/">
          <NavItemText>Blog</NavItemText>
        </NavGroupLink>

        <NavGroupLink to="/">
          <NavItemText>iOS</NavItemText>
        </NavGroupLink>

        <NavGroupLink to="/">
          <NavItemText>Android</NavItemText>
        </NavGroupLink>
      </NavLinks>
    </FooterContainer>
  )
}

export default Footer

import React from 'react'
import {
  Copyright,
  FooterContainer,
  FooterCopyright,
  FooterLinks,
  FooterMainContainer,
  FooterSocial,
  FooterSocialButton,
} from './styles'
import { NavGroupLink, NavItemText, NavLinks } from '../Header/styles'

function Footer() {
  return (
    <FooterContainer>
      <FooterMainContainer>
        <FooterLinks>
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
        </FooterLinks>
        <FooterSocial>
          <FooterSocialButton>
            <i className="lab la-instagram"></i>
          </FooterSocialButton>
          <FooterSocialButton>
            <i className="lab la-facebook-f"></i>
          </FooterSocialButton>
          <FooterSocialButton>
            <i className="lab la-google-plus"></i>
          </FooterSocialButton>
          <FooterSocialButton>
            <i className="lab la-twitter"></i>
          </FooterSocialButton>
        </FooterSocial>
      </FooterMainContainer>
      <FooterCopyright>
        <Copyright>© Copyright Luna Team 1, 2024</Copyright>
      </FooterCopyright>
    </FooterContainer>
  )
}

export default Footer

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { DivWithShadow, SimpleButton } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  gap: 3rem;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  @media (max-width: 788px) {
    display: none;
  }
`

export const NavGroupLink = styled(NavLink)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  gap: 0.8rem;
  text-decoration: none;
`

export const NavGroupLogo = styled(NavLink)`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  gap: 0.8rem;
  text-decoration: none;

  margin-right: auto;
`

export const NavLogoText = styled.h1`
  color: black;
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
`

export const NavLogoIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`

export const NavItemText = styled.h4`
  display: block;
  text-align: center;
  min-width: max-content;
  font-weight: 500;
  color: #333;
  &:hover {
    color: var(--orange);
  }
`

export const LinkLikeButton = styled(NavLink)`
  padding: 0.6rem 1.8rem;
  min-width: max-content;

  border: 1px solid var(--orange);
  border-radius: 3rem;

  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: var(--orange);
  color: var(--white);

  &:hover {
    background-color: var(--gray);
    color: var(--orange);
  }

  &:focus-visible {
    outline: 1px solid black;
    color: white;
  }

  &:focus {
    outline: 2px solid black;
    color: white;
  }
`

export const NavLeftButton = styled(LinkLikeButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: 1px;
`
export const NavRightButton = styled(LinkLikeButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export const LogoutButton = styled(LinkLikeButton)`
  line-height: 1;
  background-color: var(--white);
  color: var(--orange);
  &:focus-visible {
    color: var(--orange);
  }

  &:focus {
    color: var(--orange);
  }
`

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
`

export const NavGroupMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`

// export const DropdownMenu = styled(DivWithShadow)`
//   position: absolute;
//   top: 100%;
//   right: 0;

//   display: flex;
//   flex-direction: column;

//   margin: 0.8rem;
//   padding: 0;

//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 3px;

//   z-index: 10;
// `

// export const DropdownMenuItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 0;

//   &:hover {
//     background-color: #f0f0f0;
//   }

//   ${(props) =>
//     props.hideOnLargeScreens &&
//     `
//     @media (min-width: 789px) {
//       display: none;
//     }
//   `}
// `

// export const DropdownMenuLink = styled(NavGroupLink)`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 0.8rem;
//   padding: 1rem 2rem;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `

// export const DropdownMenuLogout = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 0.8rem;

//   padding: 1rem 2rem;
//   cursor: pointer;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `

// export const DropdownContainer = styled.div`
//   background: ${(props) => (props.$isActive ? 'white' : 'grey')};
//   width: 20rem; // Adjust the width as necessary
//   background: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   border-radius: 6px;
//   padding: 15px;
//   position: absolute; // Assuming this is a dropdown, adjust positioning as necessary
//   top: 100%;
//   right: 0;
//   z-index: 100;
// `

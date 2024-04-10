import { Link, useLocation } from 'react-router-dom'
import { StyledLi, StyledUl } from './styles'

const ProfileNav = () => {
  const location = useLocation()
  const isActive = (pathname) => location.pathname.includes(pathname)

  return (
    <StyledUl>
      <StyledLi
        isActive={
          isActive('/profile') &&
          !isActive('/profile/comments') &&
          !isActive('/profile/restaurants') &&
          !isActive('/profile/edit')
            ? 'active'
            : ''
        }
      >
        <Link to="/profile">
          <i className="lar la-star"></i> Reviews
        </Link>
      </StyledLi>
      <StyledLi isActive={isActive('/profile/comments')}>
        <Link to="/profile/comments">
          <i className="lar la-comments"></i> Comments
        </Link>
      </StyledLi>
      <StyledLi isActive={isActive('/profile/restaurants')}>
        <Link to="/profile/restaurants">
          <i className="las la-hamburger"></i> Restaurants
        </Link>
      </StyledLi>
      <StyledLi isActive={isActive('/profile/edit')}>
        <Link to="/profile/edit">
          <i className="las la-user-edit"></i> Edit Profile
        </Link>
      </StyledLi>
    </StyledUl>
  )
}

export default ProfileNav

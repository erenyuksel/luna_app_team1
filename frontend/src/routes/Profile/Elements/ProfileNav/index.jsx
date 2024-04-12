import { Link, useLocation } from 'react-router-dom'
import { StyledLi, StyledUl } from './styles'
import { useSelector } from 'react-redux'

const ProfileNav = (user) => {
  const location = useLocation()
  const isActive = (pathname) => location.pathname.includes(pathname)
  const logedInUser = useSelector((store) => store.loggedInUser.user)

  return (
    <StyledUl>
      <StyledLi
        isActive={
          isActive('/profile') &&
          !isActive(`/profile/${user.user.id}/comments`) &&
          !isActive(`/profile/${user.user.id}/restaurants`) &&
          !isActive(`/profile/${user.user.id}/edit`)
            ? 'active'
            : ''
        }
      >
        <Link to={`/profile/${user.user.id}`}>
          <i className="lar la-star"></i> Reviews
        </Link>
      </StyledLi>
      <StyledLi isActive={isActive(`/profile/${user.user.id}/comments`)}>
        <Link to={`/profile/${user.user.id}/comments`}>
          <i className="lar la-comments"></i> Comments
        </Link>
      </StyledLi>
      <StyledLi isActive={isActive(`/profile/${user.user.id}/restaurants`)}>
        <Link to={`/profile/${user.user.id}/restaurants`}>
          <i className="las la-hamburger"></i> Restaurants
        </Link>
      </StyledLi>
      {user.user.id === logedInUser.id ? ( <StyledLi isActive={isActive(`/profile/${user.user.id}/edit`)}>
        <Link to={`/profile/${user.user.id}/edit`}>
          <i className="las la-user-edit"></i> Edit Profile
        </Link>
      </StyledLi>) : <div></div>}
     
    </StyledUl>
  )
}

export default ProfileNav

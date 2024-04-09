import { StyledLi, StyledUl } from './styles'

const ProfileNav = () => {
  return (
    <StyledUl>
      <StyledLi>
        <a href="#reviews"><i className="lar la-star"></i> Reviews</a>
      </StyledLi>
      <StyledLi>
        <a href="#comments"><i className="lar la-comments"></i> Comments</a>
      </StyledLi>
      <StyledLi>
        <a href="#restaurants"><i className="las la-hamburger"></i> Restaurants</a>
      </StyledLi>
      <StyledLi>
      <a href="#editprofile"><i className="las la-user-edit"></i> Edit Profile</a>
      </StyledLi>
    </StyledUl>
  )
}

export default ProfileNav

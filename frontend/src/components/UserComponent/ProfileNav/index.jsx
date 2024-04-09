import { StyledLi, StyledUl } from "./styles";



const ProfileNav = () => {
    return (
    <StyledUl>
      <StyledLi><a href="#reviews">Reviews</a></StyledLi>
      <StyledLi><a href="#comments">Comments</a></StyledLi>
      <StyledLi><a href="#restaurants">Restaurants</a></StyledLi>
      <StyledLi><a href="#editprofile">Edit Profile</a></StyledLi>
  </StyledUl>
  );
}; 

export default ProfileNav;
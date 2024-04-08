import {Cover, UserSectionContainer, ProfilePictureIcon} from "./styles"



function Profile() {
  return (
    <div>
      <Cover />
      <UserSectionContainer>
      <div id="userinfo">
      <ProfilePictureIcon
          loading="lazy"
          alt=""
          src="../../assets/profile_picture.png" />
      <h1>User Page</h1>
      </div>
      </UserSectionContainer>
      </div>
  
  )
}

export default Profile

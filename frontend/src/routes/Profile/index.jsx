import {UserCover, UserSectionContainer, ProfilePictureIcon, UserGridContainer} from "./styles"
import { MainContainer} from "../../styles"
import profilepic from "../../assets/images/profile_picture.png"
import ProfileData from "../../components/UserComponent/UserInfo"
import UserReviews from "../../components/UserComponent/Reviews"
import ProfileNav from "../../components/UserComponent/ProfileNav"







function Profile() {
  return (
     <MainContainer>
      <UserGridContainer>
      
      <UserSectionContainer>
        <UserCover />
      
        <ProfilePictureIcon
          alt="profilepic"
          src= {profilepic}
  />      
      </UserSectionContainer>
      
      
      <div>
        <ProfileNav/>
      </div>
      
      <div>
        <UserReviews/>
      </div>
        
      <div>

      
      <ProfileData/>
      </div>  

      <div>
      

      </div>
      
      </UserGridContainer> 
    </MainContainer>
  
  )
}

export default Profile

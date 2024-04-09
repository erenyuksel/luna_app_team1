import {
  UserCover,
  UserGridContainer,
  ProfilePicture,
  UserPhotoNav,
} from './styles'
import { MainContainer, SectionContainer } from '../../styles'
import profilepic from '../../assets/images/profile_picture.png'
import UserReviews from './Elements/Reviews'
import ProfileNav from './Elements/ProfileNav'
import ProfileData from './Elements/ProfileData'
import UserInfoStatistics from './Elements/ProfileData/UserStatistics'

function Profile() {
  return (
    <MainContainer>
      <UserCover />

      <UserGridContainer>
        <UserPhotoNav>
          <ProfilePicture alt="profilepic" src={profilepic} />
          <ProfileNav />
        </UserPhotoNav>

        <UserInfoStatistics />
        <UserReviews />

        <ProfileData />
      </UserGridContainer>
    </MainContainer>
  )
}

export default Profile

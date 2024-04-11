import {
  UserCover,
  UserGridContainer,
  ProfilePicture,
  UserPhotoNav,
} from './styles'
import { MainContainer, SectionContainer } from '../../styles'
import profilepic from '../../assets/images/profile_picture.png'
import ProfileNav from './Elements/ProfileNav'
import ProfileData from './Elements/ProfileData'
import UserInfoStatistics from './Elements/ProfileData/UserStatistics'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Profile() {
  const userData = useSelector((state) => state.loggedInUser.user)[0]
  console.log('sssss', userData)
  return (
    <MainContainer>
      <UserCover />

      <UserGridContainer>
        <UserPhotoNav>
          <ProfilePicture alt="profilepic" src={userData.profile_picture} />
          <ProfileNav />
        </UserPhotoNav>

        <UserInfoStatistics user={userData}  />
        <Outlet user={userData} />

        <ProfileData user={userData} />
      </UserGridContainer>
    </MainContainer>
  )
}

export default Profile

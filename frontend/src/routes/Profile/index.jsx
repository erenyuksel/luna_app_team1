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
import { useEffect, useState } from 'react'
import  useApiRequest  from '../../axios/useApiRequest'
import { useParams } from 'react-router'



function Profile() {
  let {user_id} = useParams()
  const [user, setUser] = useState('')


  useEffect(() => {
    const getUser = async () => {
      try {
        const get_user = await useApiRequest.get(`/users/${user_id}`);
        setUser(get_user.data[0])
      } catch (error) {
        console.log(error)
      } 
    };
    getUser()
  }, []);


  return (
    <MainContainer>
      <UserCover />

      <UserGridContainer>
        <UserPhotoNav>
          <ProfilePicture alt="profilepic" src={user.profile_picture} />
          <ProfileNav user={user} />
        </UserPhotoNav>

        <UserInfoStatistics user={user}  />
        <Outlet />

        <ProfileData user={user} />
      </UserGridContainer>
    </MainContainer>
  )
}

export default Profile

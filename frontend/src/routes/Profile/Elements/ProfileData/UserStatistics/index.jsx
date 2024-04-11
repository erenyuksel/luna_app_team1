import React from 'react'
import { UserStatistics } from '../styles'

function UserInfoStatistics(userData) {
  return (
    <UserStatistics>
      <p>
        <strong>
          {userData.user.first_name}, {userData.user.last_name}
        </strong>
      </p>
      {/* <p>Zürich, CH</p> */}
      <p>{userData.user.total_review} reviews</p>
      <p>
        {userData.user.total_comments ? userData.user.total_comments : 0}{' '}
        comments
      </p>
    </UserStatistics>
  )
}

export default UserInfoStatistics

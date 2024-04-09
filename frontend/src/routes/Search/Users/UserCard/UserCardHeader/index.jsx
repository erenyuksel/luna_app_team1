import React from 'react'
import {
  UserAvatar,
  UserCardAvatarWrapper,
  UserCardHeaderContainer,
  UserCardHeaderInfo,
  UserCardReviews,
} from '../styles'

function UserCardHeader({ url, userName, reviews }) {
  return (
    <UserCardHeaderContainer>
      <UserCardAvatarWrapper>
        <UserAvatar src={url} alt={userName} />
      </UserCardAvatarWrapper>
      <UserCardHeaderInfo>
        <h4>{userName}</h4>
        <UserCardReviews>{reviews} reviews in total</UserCardReviews>
      </UserCardHeaderInfo>
    </UserCardHeaderContainer>
  )
}

export default UserCardHeader

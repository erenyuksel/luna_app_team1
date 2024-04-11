import React from 'react'
import {
  UserAvatar,
  UserCardAvatarWrapper,
  UserCardHeaderContainer,
  UserCardHeaderInfo,
  UserCardReviews,
} from '../styles'

function UserCardHeader({ url, firstname, lastname, reviews }) {
  return (
    <UserCardHeaderContainer>
      <UserCardAvatarWrapper>
        <UserAvatar src={url} alt={lastname} />
      </UserCardAvatarWrapper>
      <UserCardHeaderInfo>
        <h4>{firstname} {lastname}</h4>
        <UserCardReviews>{reviews} reviews in total</UserCardReviews>
      </UserCardHeaderInfo>
    </UserCardHeaderContainer>
  )
}

export default UserCardHeader

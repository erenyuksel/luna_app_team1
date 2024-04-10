import React from 'react'
import { BaseArticle, DivWithLine } from '../../../../styles'
import UserCardHeader from './UserCardHeader'
import { UserCardInfo } from './styles'

function UserCard({ user }) {
  return (
    <DivWithLine>
      <BaseArticle>
        <UserCardHeader
          url={user.photoUrl}
          userName={user.name}
          reviews={user.reviewsCount}
        />
        <UserCardInfo>{user.about}</UserCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default UserCard

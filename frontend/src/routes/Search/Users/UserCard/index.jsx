import React from 'react'
import { BaseArticle, DivWithLine } from '../../../../styles'
import UserCardHeader from './UserCardHeader'
import { UserCardInfo } from './styles'

function UserCard({ user }) {
  return (
    <DivWithLine>
      <BaseArticle>
        <UserCardHeader
          url={user.profile_picture}
          firstname={user.first_name}
          lastname={user.last_name}
          reviews={user.total_review}
        />
        <UserCardInfo>{user.description}</UserCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default UserCard

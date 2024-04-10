import React from 'react'
import { BaseArticle, DivWithLine } from '../../../../styles'
import UserCardHeader from '../../Users/UserCard/UserCardHeader'
import {
  ReviewCardInfo,
  ReviewComment,
  ReviewLike,
  ReviewReactions,
} from './styles'
import ReviewComments from '../ReviewComments'

function ReviewCard({ user }) {
  return (
    <DivWithLine>
      <BaseArticle>
        <UserCardHeader
          url={user.photoUrl}
          userName={user.name}
          reviews={user.reviewsCount}
        />
        <ReviewCardInfo>
          {user.review}

          <ReviewReactions>
            <ReviewLike>
              <i className="lar la-heart"></i> Like
            </ReviewLike>
            <ReviewComment>Comments</ReviewComment>
          </ReviewReactions>

          <h4>Last comments</h4>
          <ReviewComments reviewId={user.id} />
        </ReviewCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default ReviewCard

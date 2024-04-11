import { BaseArticle, DivWithLine } from '../../../../styles'
import { ReviewCardInfo } from './styles'

import ReviewReactionsComponent from '../ReviewReactions'
import UserCardHeader from '../../Users/UserCard/UserCardHeader'
import ReviewComments from '../ReviewComments'

function ReviewCard({ review, user }) {
  return (
    <DivWithLine>
      <BaseArticle>
        <UserCardHeader
          url={user.profile_picture}
          firstname={user.first_name}
          lastname={user.last_name}
          reviews={user.total_review}
        />
        <ReviewCardInfo>
          <h3>{review.restaurant.name}</h3>
          <ReviewReactionsComponent countLikes={review.count_likes} />

          <h4>Last comments</h4>
          <ReviewComments reviewId={review.id} />
        </ReviewCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default ReviewCard

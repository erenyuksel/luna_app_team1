import { BaseArticle, DivWithLine } from '../../../../styles'
import UserCardHeader from '../../Users/UserCard/UserCardHeader'
import {
  ReviewCardInfo,
  ReviewComment,
  ReviewLike,
  ReviewReactions,
} from './styles'
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
          <ReviewReactions>
            <ReviewLike>
              <i className="lar la-heart"></i> Like{' '}
              {review.count_likes > 0 ? review.count_likes : null}
            </ReviewLike>
            <ReviewComment>Comments</ReviewComment>
          </ReviewReactions>

          <h4>Last comments</h4>
          <ReviewComments reviewId={review.id} />
        </ReviewCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default ReviewCard

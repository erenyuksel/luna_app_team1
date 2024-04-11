import { BaseArticle, DivWithLine } from '../../../../styles'
import { ReadMoreLink, ReviewCardInfo } from './styles'

import ReviewReactionsComponent from '../ReviewReactions'
import UserCardHeader from '../../Users/UserCard/UserCardHeader'
import truncateText from '../../../../utils/useTruncate'
import ReviewComments from '../ReviewComments'


function ReviewCard({ review, user }) {
  const maxLength = 50
  const readMoreLink = `/search/restaurant/${review.restaurant.id}`
  const truncatedText = truncateText(review.text_content, maxLength)
  const isTextTruncated = review.text_content.length > maxLength

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
          <p>
            {truncatedText}
            {isTextTruncated && (
              <ReadMoreLink to={readMoreLink}>
                Read more <i className="las la-long-arrow-alt-right"></i>
              </ReadMoreLink>
            )}
          </p>
          <ReviewReactionsComponent countLikes={review.count_likes} />

          <h4>Last comments</h4>
          <ReviewComments reviewId={review.id} />
        </ReviewCardInfo>
      </BaseArticle>
    </DivWithLine>
  )
}

export default ReviewCard

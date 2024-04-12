import { BaseArticle } from '../../../../../styles'
import { LikesAndComments, ReviewCardInfo, ShowComments } from './styles'

import ReviewReactionsComponent from '../../../Reviews/ReviewReactions'
import CardHeader from './CardHeader'

function RestaurantReviewCard({ review, user }) {
  return (
    <BaseArticle>
      <CardHeader
        url={user.profile_picture}
        firstname={user.first_name}
        lastname={user.last_name}
        reviews={user.total_review}
        stars={review.rating_stars}
        date={review.date_created}
      />
      <ReviewCardInfo>
        <p>{review.text_content}</p>

        <LikesAndComments>
          <ReviewReactionsComponent countLikes={review.count_likes} />
          <ShowComments href="#">Show all comments</ShowComments>
        </LikesAndComments>

        {/* <ShowComemnts>

        </ShowComemnts> */}
      </ReviewCardInfo>
    </BaseArticle>
  )
}

export default RestaurantReviewCard

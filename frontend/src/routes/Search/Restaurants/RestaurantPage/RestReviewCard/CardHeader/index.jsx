import RatingStars from '../../../../../../components/SmallElements/RatingStars'
import { formatDate } from '../../../../../../utils/formatDate'
import {
  AuthorInfo,
  CardAvatarWrapper,
  CardHeaderContainer,
  UserAvatar,
  UserInfo,
  UserReviews,
} from '../styles'

function CardHeader({ url, firstname, lastname, reviews, date, stars }) {
  return (
    <CardHeaderContainer>
      <AuthorInfo>
        <CardAvatarWrapper>
          <UserAvatar src={url} alt={lastname} />
        </CardAvatarWrapper>
        <UserInfo>
          <h4>
            {firstname} {lastname}
          </h4>
          <UserReviews>{reviews} reviews in total</UserReviews>
        </UserInfo>
      </AuthorInfo>
      <div>
        <RatingStars rating={stars} />
      </div>
      <div>{formatDate(date)}</div>
    </CardHeaderContainer>
  )
}

export default CardHeader

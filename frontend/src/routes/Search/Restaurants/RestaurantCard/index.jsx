import { BaseArticle, DivWithLine } from '../../../../styles'
import {
  ImageWrapper,
  RestInfo,
  RestInfoAdress,
  RestPhoto,
  RestRaitingContainer,
} from './styles'
import placeholderImage from '../../../../assets/photos/rest.png'

import RatingStars from '../../../../components/SmallElements/RatingStars'

function RestaurantCard({
  name,
  imageUrl,
  street,
  city,
  averageRating,
  reviewsCount,
}) {
  return (
    <DivWithLine>
      <BaseArticle>
        <RestInfo>
          <h3>{name}</h3>
          <RestInfoAdress>
            {street}, {city}
          </RestInfoAdress>
          <RestRaitingContainer>
            <RatingStars rating={averageRating} />
            {reviewsCount}
          </RestRaitingContainer>
        </RestInfo>
        <ImageWrapper>
          <RestPhoto src={imageUrl || placeholderImage} alt={name} />
        </ImageWrapper>
      </BaseArticle>
    </DivWithLine>
  )
}

export default RestaurantCard

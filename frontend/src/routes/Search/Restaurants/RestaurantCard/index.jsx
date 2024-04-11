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
import { useNavigate } from 'react-router-dom'

function RestaurantCard({
  name,
  id,
  imageUrl,
  street,
  city,
  averageRating,
  reviewsCount,
}) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/restaurants/${id}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      navigate(`/restaurants/${id}`)
    }
  }

  return (
    <DivWithLine
      onClick={handleCardClick}
      onKeyPress={handleKeyPress}
      tabIndex="0"
      role="button"
      aria-label={`View details about ${name}`}
      clickable
    >
      <BaseArticle>
        <RestInfo>
          <h3>{name}</h3>
          <RestInfoAdress>
            {street}, {city}
          </RestInfoAdress>
          <RestRaitingContainer>
            <RatingStars rating={averageRating} />
            {reviewsCount} Reviews
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

import { BaseArticle, DivWithLine } from '../../../../styles'
import {
  ImageWrapper,
  RestInfo,
  RestInfoAdress,
  RestPhoto,
  RestRaitingContainer,
} from './styles'
import placeholderImage from '../../../../assets/photos/rest.png'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function RestaurantCard({ name, imageUrl, street, city, averageRating, reviewsCount }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      <>
        {Array(fullStars).fill(<FaStar color="#FFD700" />)}
        {halfStar ? <FaStarHalfAlt color="#FFD700" /> : null}
        {Array(emptyStars).fill(<FaRegStar color="#FFD700" />)}
      </>
    );
  };

  return (
    <DivWithLine>
      <BaseArticle>
        <RestInfo>
          <h3>{name}</h3>
          <RestInfoAdress>
            {street}, {city}
          </RestInfoAdress>
          <RestRaitingContainer>
            <div>{renderStars(averageRating)}</div>
            {reviewsCount}
          </RestRaitingContainer>
        </RestInfo>
        <ImageWrapper>
          <RestPhoto src={imageUrl || placeholderImage} alt={name} />
        </ImageWrapper>
      </BaseArticle>
    </DivWithLine>
  );
}

export default RestaurantCard

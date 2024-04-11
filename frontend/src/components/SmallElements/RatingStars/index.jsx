import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div>
      {Array(fullStars).fill(0).map((_, i) => <FaStar key={`full-${i}`} color="#FFD700" />)}
      {halfStar ? <FaStarHalfAlt color="#FFD700" /> : null}
      {Array(emptyStars).fill(0).map((_, i) => <FaRegStar key={`empty-${i}`} color="#FFD700" />)}
    </div>
  );
};

export default RatingStars;
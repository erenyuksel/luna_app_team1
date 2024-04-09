import { SectionTitle, UserSection } from '../../styles'
import {
  ReviewCard,
  ReviewDate,
  ReviewDescription,
  ReviewHeader,
  ReviewTitle,
} from './styles'

const reviews = [
  {
    title: 'Läderach Chocolatier Suisse',
    date: '01.01.2018 15:22',
    image1: 'stars',
    description:
      'This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.',
  },
  {
    title: 'Kaufläuten',
    date: '01.01.2018 16:22',
    image1: 'stars',
    description: 'Nice place.',
  },
]

function UserReviews() {
  return (
    <UserSection>
      <SectionTitle>Reviews</SectionTitle>

      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewHeader>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewDate>{review.date}</ReviewDate>
          </ReviewHeader>

          <ReviewDescription>{review.description}</ReviewDescription>
        </ReviewCard>
      ))}
    </UserSection>
  )
}
export default UserReviews

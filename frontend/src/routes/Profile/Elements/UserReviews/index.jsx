import { useEffect, useState } from 'react'
import { SectionTitle, UserSection } from '../../styles'
import {
  ReviewCard,
  ReviewDate,
  ReviewDescription,
  ReviewHeader,
  ReviewTitle,
} from './styles'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import  useApiRequest  from '../../../../axios/useApiRequest'

function UserReviews() {
  let {user_id} = useParams()
  const [reviews, setReviews] =useState([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews_data = await useApiRequest.get(`/reviews/user/${user_id}/`);
        setReviews(reviews_data.data)
      } catch (error) {
        console.log(error)
      } 
    };
    getReviews()
  }, []);

  // const userid = useSelector((state) => {})

  return (
    <UserSection>
      {console.log('reviews', reviews)}
      <SectionTitle>Reviews</SectionTitle>

      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewHeader>
            {/* <ReviewTitle>{review.title}</ReviewTitle> */}
            <ReviewDate>{review.date_created}</ReviewDate>
          </ReviewHeader>

          <ReviewDescription>{review.text_content}</ReviewDescription>
        </ReviewCard>
      ))}
    </UserSection>
  )
}
export default UserReviews

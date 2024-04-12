import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchReviews } from '../../../store/slices/reviewsSlice'
import { GridContainer } from '../../../styles'
import ReviewCard from './ReviewCard'
import Loading from '../../../components/SmallElements/Loading'

function ReviewsList() {
  const dispatch = useDispatch()
  const { reviews, status, error } = useSelector((state) => state.reviews)

  useEffect(() => {
    dispatch(fetchReviews())
  }, [dispatch])

  console.log(reviews)

  if (status === 'loading') return <Loading />
  if (error) return <div>Error: {error}</div>

  return (
    <GridContainer>
      {reviews.map((review) => {
        return <ReviewCard key={review.id} review={review} user={review.user} />
      })}
    </GridContainer>
  )
}

export default ReviewsList

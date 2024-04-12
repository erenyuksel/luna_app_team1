import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchRestaurants,
  selectRestaurantById,
} from '../../../../store/slices/restaurantsSlice'
import { fetchReviewsByRestaurantId } from '../../../../store/slices/reviewsSlice'
import {
  MainContainer,
  SectionContainer,
  SimpleButton,
} from '../../../../styles'
import {
  FilterForm,
  FilterInput,
  PrincipalInfo,
  PrincipalInfoButtons,
  RestaurantCover,
  RestaurantGridContainer,
  RestaurantPrincipalInfos,
  RestaurantReviewsContainer,
  ReviewsAndCommentsContainer,
} from './styles'
import { RestaurantInfo } from '../../../ContributionPages/NewReview/styles'
import RatingStars from '../../../../components/SmallElements/RatingStars'
import RestaurantReviewCard from './RestReviewCard'
import Loading from '../../../../components/SmallElements/Loading'
import NotFound from '../../../NotFound'

const RestauranPage = () => {
  const { restId } = useParams()
  const dispatch = useDispatch()
  const restaurant = useSelector((state) => selectRestaurantById(state, restId))
  const reviews = useSelector((state) => state.reviews.reviews)
  const reviewsStatus = useSelector((state) => state.reviews.status)
  const { status: restaurantStatus, error: restaurantError } = useSelector(
    (state) => state.restaurants,
  )

  useEffect(() => {
    if (!restaurant && restaurantStatus !== 'loading') {
      dispatch(fetchRestaurants())
    }
    dispatch(fetchReviewsByRestaurantId(restId))
  }, [restId, dispatch, restaurant, restaurantStatus])

  console.log(reviews)

  if (restaurantStatus === 'loading' || reviewsStatus === 'loading') {
    return <Loading />
  }

  if (restaurantStatus === 'failed' || reviewsStatus === 'failed') {
    return (
      <MainContainer>
        <SectionContainer>
          <p>Error loading the restaurant details: {restaurantError}</p>
          <p>
            Error loading reviews:
            {reviewsStatus === 'failed' ? 'Failed to load reviews' : ''}
          </p>
        </SectionContainer>
      </MainContainer>
    )
  }

  if (!restaurant) {
    return <NotFound />
  }

  return (
    <MainContainer>
      <RestaurantCover coverBg={restaurant.image}>
        <SectionContainer>
          <RestaurantInfo>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.category.name}</p>
            <RatingStars rating={restaurant.rating} />
          </RestaurantInfo>
        </SectionContainer>
      </RestaurantCover>
      <RestaurantGridContainer>
        <ReviewsAndCommentsContainer>
          <FilterForm>
            <FilterInput
              name="filter"
              id="filter"
              placeholder="Filter list..."
            />
            <SimpleButton>Filter</SimpleButton>
          </FilterForm>
          <RestaurantReviewsContainer>
            {reviews.map((review) => {
              return (
                <RestaurantReviewCard
                  key={review.id}
                  review={review}
                  user={review.user}
                />
              )
            })}
          </RestaurantReviewsContainer>
        </ReviewsAndCommentsContainer>
        <RestaurantPrincipalInfos>
          <PrincipalInfo>
            <i className="lar la-clock"></i> <p>{restaurant.opening_hours}</p>
          </PrincipalInfo>
          <PrincipalInfo>
            <i className="las la-money-bill-wave"></i>
            <p>Price level: {restaurant.price_level_display}</p>
          </PrincipalInfo>

          <PrincipalInfoButtons>
            <SimpleButton>Write a Review</SimpleButton>
            <SimpleButton>Edit Data</SimpleButton>
          </PrincipalInfoButtons>
        </RestaurantPrincipalInfos>
      </RestaurantGridContainer>
    </MainContainer>
  )
}

export default RestauranPage

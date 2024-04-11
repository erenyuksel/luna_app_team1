import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchRestaurants,
  selectRestaurantById,
} from '../../../../store/slices/restaurantsSlice'
import { MainContainer, SectionContainer } from '../../../../styles'
import { RestaurantCover } from './styles'
import { RestaurantInfo } from '../../../ContributionPages/NewReview/styles'
import RatingStars from '../../../../components/SmallElements/RatingStars'

const RestauranPage = () => {
  let { restId } = useParams()
  const dispatch = useDispatch()
  const restaurant = useSelector((state) => selectRestaurantById(state, restId))
  const { status } = useSelector((state) => state.restaurants)

  console.log(restaurant)

  useEffect(() => {
    if (!restaurant && status !== 'loading') {
      dispatch(fetchRestaurants(restId))
    }
  }, [restId, dispatch, restaurant, status])

  if (status === 'loading')
    return (
      <MainContainer>
        <SectionContainer>
          <p>Loading...</p>
        </SectionContainer>
      </MainContainer>
    )
  if (status === 'failed')
    return (
      <MainContainer>
        <SectionContainer>
          <p>Error loading the restaurant details.</p>
        </SectionContainer>
      </MainContainer>
    )

  if (!restaurant)
    return (
      <MainContainer>
        <SectionContainer>
          <p>Restaurant not found.</p>
        </SectionContainer>
      </MainContainer>
    )

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
      <SectionContainer></SectionContainer>
    </MainContainer>
  )
}

export default RestauranPage

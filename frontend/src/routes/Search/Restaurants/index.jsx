import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRestaurants } from '../../../store/slices/restaurantsSlice'
import { GridContainer } from '../../../styles'
import RestaurantCard from './RestaurantCard'

function RestaurantsList() {
  const dispatch = useDispatch()
  const { restaurants, status, error } = useSelector(
    (state) => state.restaurants,
  )

  console.log(restaurants)

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch])

  return (
    <GridContainer>
      {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            imageUrl={restaurant.image}
            street={restaurant.street}
            city={restaurant.city}
            averageRating={restaurant.rating}
            reviewsCount={restaurant.count_reviews}
          />
      ))}
    </GridContainer>
  )
}

export default RestaurantsList

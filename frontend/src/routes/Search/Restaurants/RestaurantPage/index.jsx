import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { MainContainer, SectionContainer } from '../../../../styles'
import { RestaurantCover } from './styles'
import { selectRestaurantById } from '../../../../store/slices/restaurantsSlice'

const RestauranPage = () => {
  let { restId } = useParams()
  const restaurant = useSelector((state) => selectRestaurantById(state, restId))

  return (
    <MainContainer>
      <RestaurantCover coverBg=""></RestaurantCover>
      <SectionContainer>
        {/* <h2>ресторан: {restaurant.title}</h2> */}
      </SectionContainer>
    </MainContainer>
  )
}

export default RestauranPage

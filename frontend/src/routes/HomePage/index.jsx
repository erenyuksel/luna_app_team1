import {
  BaseArticle,
  DivWithLine,
  GridContainer,
  InputBase,
  MainContainer,
  SectionContainer,
  SimpleButton,
} from '../../styles'
import RestaurantsList from '../Search/Restaurants'
import RestaurantCard from '../Search/Restaurants/RestaurantCard'
import RestauranCard from '../Search/Restaurants/RestaurantCard'
import { HomePageCover, HomePageCoverSearch } from './styles'

const HomePage = () => {
  return (
    <MainContainer>
      <HomePageCover>
        <SectionContainer>
          <HomePageCoverSearch>
            <InputBase placeholder="Search..."></InputBase>
            <SimpleButton>click</SimpleButton>
          </HomePageCoverSearch>
        </SectionContainer>
      </HomePageCover>
      <SectionContainer>
        <RestaurantsList />
      </SectionContainer>
    </MainContainer>
  )
}
export default HomePage

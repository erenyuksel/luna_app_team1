import {
  InputBase,
  MainContainer,
  SectionContainer,
  SimpleButton,
} from '../../styles'
import RestaurantsList from '../Search/Restaurants'
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

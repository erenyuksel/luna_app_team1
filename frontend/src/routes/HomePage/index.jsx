import {
  BaseArticle,
  DivWithLine,
  GridContainer,
  InputBase,
  MainContainer,
  SectionContainer,
  SimpleButton,
} from '../../styles'
import RestaurantCard from './Contents/RestaurantCard'
import RestauranCard from './Contents/RestaurantCard'
import { HomePageCover, HomePageCoverSearch } from './styles'

const HomePage = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Byte Bistro',
      imageUrl:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Tech Park Strasse 1, Zurich',
      reviewsCount: 124,
      averageRating: 4.5,
    },
    {
      id: 2,
      name: 'Code Café',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Algorithm Ave 42, Zurich',
      reviewsCount: 98,
      averageRating: 4.7,
    },
    {
      id: 3,
      name: 'Syntax Supper',
      imageUrl: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Binary Blvd 1010, Zurich',
      reviewsCount: 75,
      averageRating: 4.3,
    },
    {
      id: 4,
      name: 'Variable Bistro',
      imageUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Function Forest 33, Zurich',
      reviewsCount: 152,
      averageRating: 4.6,
    },
    {
      id: 5,
      name: 'Loop Lounge',
      imageUrl: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Array Alley 404, Zurich',
      reviewsCount: 89,
      averageRating: 4.4,
    },
    {
      id: 6,
      name: 'Stack Snack',
      imageUrl: 'https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Pointer Pathway 32, Zurich',
      reviewsCount: 67,
      averageRating: 4.2,
    },
    {
      id: 7,
      name: 'Heap House',
      imageUrl: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Class Court 56, Zurich',
      reviewsCount: 134,
      averageRating: 4.8,
    },
    {
      id: 8,
      name: 'Git Grub',
      imageUrl: 'https://images.unsplash.com/photo-1538334421852-687c439c92f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: 'Module Mall 777, Zurich',
      reviewsCount: 45,
      averageRating: 4.0,
    },
  ]

  return (
    <>
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
          <GridContainer>
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                imageUrl={restaurant.imageUrl}
                address={restaurant.address}
                averageRating={restaurant.averageRating}
                reviewsCount={restaurant.reviewsCount}
              />
            ))}
          </GridContainer>
        </SectionContainer>
      </MainContainer>
    </>
  )
}
export default HomePage

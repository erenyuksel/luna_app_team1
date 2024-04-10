import { MainContainer, SectionContainer } from '../../styles'
import { Outlet } from 'react-router-dom'

import UsersList from './Users'
import ReviewsList from './Reviews'
import CatMenu from './CatMenu'

function Search() {
  return (
    <MainContainer>
      <CatMenu />
      <SectionContainer>
        <Outlet />
      </SectionContainer>
    </MainContainer>
  )
}

export default Search

import { MainContainer, SectionContainer } from '../../styles'
import { Outlet } from 'react-router-dom'

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

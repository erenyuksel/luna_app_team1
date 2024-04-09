import React from 'react'
import { MainContainer, SectionContainer } from '../../styles'
import UsersList from './Users'
import ReviewsList from './Reviews'

function Search() {
  return (
    <MainContainer>
      <SectionContainer>
        <h1>Sample Users</h1>
        <UsersList />
        <h1>Sample Reviews</h1>
        <ReviewsList />

      </SectionContainer>
    </MainContainer>
  )
}

export default Search

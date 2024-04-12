import styled from 'styled-components'
import { Cover, InputBase, SectionContainer } from '../../../../styles'

export const RestaurantCover = styled(Cover)`
  position: static;
  background-image: ${({ coverBg }) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverBg})`};
  height: 36vh;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p,
  div {
    font-weight: 300;
    line-height: 2;
  }
`

export const RestaurantGridContainer = styled(SectionContainer)`
  display: grid;
  justify-content: space-between;
  gap: 3rem;

  grid-template-columns: 3fr 1fr;

  @media (max-width: 788px) {
    grid-template-columns: 1fr;
  }
`

export const RestaurantReviewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  gap: 0.5rem;
`

export const ReviewsAndCommentsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const RestaurantPrincipalInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;

  & > :first-child {
    border-bottom: 1px solid var(--dark-gray);
  }
`

export const PrincipalInfo = styled.div`
  padding: 0.5rem 0 1rem 0;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  line-height: 1;
`

export const PrincipalInfoButtons = styled.div`
  width: 100%;
  margin-top: 2rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`

export const FilterInput = styled(InputBase)`
  width: 100%;
  line-height: 1;
`

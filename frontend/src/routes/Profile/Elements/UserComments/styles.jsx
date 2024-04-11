import styled from 'styled-components'


export const ReviewCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ReviewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`

export const ReviewTitle = styled.h2`
  font-size: 1.2rem;
`

export const ReviewDate = styled.time`
  color: var(--dark-gray);
  text-align: right;
  font-size: 0.8rem;
`

export const ReviewDescription = styled.p`
  text-align: justify;
  font-size: 0.9rem;

`

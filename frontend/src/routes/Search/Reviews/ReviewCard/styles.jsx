import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ReviewCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 0.8rem 1rem 0.8rem;
  font-size: 0.9rem;
`

export const ReadMoreLink = styled(Link)`
  color: var(--orange);
  font-weight: 500;
`
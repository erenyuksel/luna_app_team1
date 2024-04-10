import styled from 'styled-components'
import { ButtonBase, SimpleButton } from '../../../../styles'

export const ReviewCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 0.8rem 1rem 0.8rem;
  font-size: 0.9rem;
`

export const ReviewReactions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
`

const ReviewButton = styled(SimpleButton)`

padding: 0.4rem 1.2rem;;
  background-color: var(--dark-gray);
  border: 0;

  color: var(--white);
  font-size: 0.7rem;

  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }
`

export const ReviewLike = styled(ReviewButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export const ReviewComment = styled(ReviewButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

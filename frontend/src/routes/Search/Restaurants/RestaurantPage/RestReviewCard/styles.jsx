import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ReviewCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0 1rem 1rem 1rem;
  font-size: 0.9rem;
`

export const CardHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 1rem;

  border-bottom: 1px solid var(--gray);

  & > :last-child {
    padding-right: 1rem;
    text-align: right;
    font-size: 0.9rem;
    color: var(--dark-gray);
  }
`

export const LikesAndComments = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`

export const ShowComments = styled(Link)`
  font-size: 0.9rem;
  color: var(--orange);
`

export const CardAvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  aspect-ratio: 1/1;
`

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardHeaderInfo = styled.div`
  width: 100%;
  padding: 0 0.8rem;
`

export const UserReviews = styled.div`
  font-size: 0.8rem;
`

export const UserInfo = styled.div`
  padding: 0 0.8rem 1rem 0.8rem;
  font-size: 0.9rem;
`

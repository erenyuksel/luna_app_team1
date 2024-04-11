import styled from 'styled-components'

export const UserCardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray);

`

export const UserCardAvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  aspect-ratio: 1/1;
`

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const UserCardHeaderInfo = styled.div`
  width: 100%;
  padding: 0 0.8rem;
`

export const UserCardReviews = styled.div`
  font-size: 0.8rem;
`

export const UserCardInfo = styled.div`
  padding: 0 0.8rem 1rem 0.8rem;
  font-size: 0.9rem;
`


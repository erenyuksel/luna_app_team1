import styled from 'styled-components'
import { BaseDiv } from '../../../../styles'

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px; 
`

export const RestPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const RestInfo = styled.div`
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const RestRaitingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

export const RestInfoAdress = styled.div`
    font-size: 0.9rem;
`
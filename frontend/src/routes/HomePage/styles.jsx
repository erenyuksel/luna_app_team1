import styled from 'styled-components'
import { Cover } from '../../styles'
import bgImg from '../../assets/images/luna-home-bg.png'

export const HomePageCover = styled(Cover)`
  background-image: url(${bgImg});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36vh;
`

export const HomePageCoverSearch = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`

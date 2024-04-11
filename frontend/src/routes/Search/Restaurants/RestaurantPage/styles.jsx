import styled from 'styled-components'
import { Cover } from '../../../../styles'

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

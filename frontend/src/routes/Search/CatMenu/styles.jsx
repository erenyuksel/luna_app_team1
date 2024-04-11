import styled from 'styled-components'
import { SectionContainer } from '../../../styles'

export const CatMenuContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CatMenuUl = styled.ul`
  width: min-content;

  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
  border-bottom: 1px solid var(--dark-gray);
`

export const CatMenuLi = styled.li`
  text-align: center;

  a {
    font-weight: 500;
    text-transform: uppercase;
    display: block;
    color: #000;
    padding: 0.4rem 0.8rem;
    min-width: 180px;
    border-bottom: ${({ isActive }) =>
      isActive ? '2px solid var(--orange)' : '2px solid transparent'};

    @media (max-width: 788px) {
      min-width: min-content;
    }
  }

  a:hover {
    color: var(--orange);
  }
`

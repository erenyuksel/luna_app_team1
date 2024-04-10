import styled from 'styled-components'

export const StyledUl = styled.ul`
  list-style-type: none;
  width: 100%;

  & > :last-child {
    border-bottom: 1px solid var(--dark-gray);
    margin-bottom: 2rem;
  }
`

export const StyledLi = styled.li`
  border-top: 1px solid var(--dark-gray);

  a {
    display: block;
    color: #000;
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    min-width: 180px;
    border-left: ${({ isActive }) =>
      isActive ? '5px solid var(--orange)' : '5px solid transparent'};
  }

  a:hover {
    background-color: var(--dark-gray);
    color: white;
  }
`

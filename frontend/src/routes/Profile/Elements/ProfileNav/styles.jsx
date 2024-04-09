import styled from 'styled-components'

export const StyledUl = styled.ul`
  list-style-type: none;
  width: 100%;
`

export const StyledLi = styled.li`
  a {
    display: block;
    color: #000;
    padding: 0.4rem 0.8rem;
    text-decoration: none;
    min-width: 180px;
  }

  a:hover {
    background-color: var(--dark-gray);
    color: white;
  }
`


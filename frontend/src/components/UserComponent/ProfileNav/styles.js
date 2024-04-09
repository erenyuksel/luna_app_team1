import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
`;

export const StyledLi = styled.li`
  a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #555;
    color: white;
  }
`;
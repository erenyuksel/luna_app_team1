import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {},
}

export const GlobalStyle = createGlobalStyle`
  :root {
  /* colors */
  --white: #fff;
  --orange: #E47D31;
  --gray: whitesmoke;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 100%;
  } 

  body {
    display: flex;
    justify-content: center;
    background-color: var(--gray);
  }
`

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

export const SectionContainer = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 1rem 3rem;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`

// Divs used in User and Feed

export const BaseDiv = styled.div`
  background-color: #fff;
  border: 1px solid var(--gray);
  padding: 0;
`

export const DivWithLine = styled(BaseDiv)`
  border-top: 5px solid var(--orange);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px; 
`

export const DivWithShadow = styled(BaseDiv)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const BaseArticle = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 1rem;
  background-color: #fff;
  border: 0;
`

export const ButtonBase = styled.button`
  padding: 0.6rem 1.8rem;
  border-radius: 3rem;
  cursor: pointer;
  text-transform: uppercase;
  min-width: max-content;

  &:focus-visible {
    outline: 2px solid black;
    color: white;
  }

  &:focus {
    outline: 2px solid black;
    color: white;
  }
`
export const SimpleButton = styled(ButtonBase)`
  border: 1px solid var(--orange);
  background: var(--orange);
  color: var(--white);

  &:hover {
    background-color: var(--white);
    color: var(--orange);
  }
`;
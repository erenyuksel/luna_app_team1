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
  --dark-gray: #aaa;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
  } 

  body {
    display: flex;
    justify-content: center;
    background-color: var(--gray);
  }

  a {
    text-decoration: none;
  }

  textarea {
    font-family: 'Roboto', 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    &::placeholder {
      color: #ccc;
    }
  }
`

export const Cover = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center;
`

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin: auto auto;
`

export const SectionContainer = styled.section`
  max-width: 1240px;
  margin: 0 auto;

  padding: 1rem 3rem;

  @media (max-width: 788px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 1rem 1rem;
  }
`

export const CenteredSectionContainer = styled(SectionContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;

  /* position: relative; */
`

export const GridContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media (max-width: 788px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
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

export const DivWithBottomLine = styled(BaseDiv)`
  border-bottom: 5px solid var(--orange);
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  height: 3rem;
  width: 5rem;
  background: transparent;
  color: #00000088;
  font-weight: 700;
`

export const DivWithShadow = styled(BaseDiv)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

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

  &:focus,
  &:focus-visible {
    outline: 2px solid lightgreen;
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
  &:active {
    color: var(--orange);
  }
`

export const InputBase = styled.input`
  padding: 0.6rem;
  border: 1px solid var(--dark-gray);
  background-color: var(--white);
  border-radius: 3px;

  font-size: 1rem;

  &:focus,
  &:focus-visible {
    border: 1px solid var(--orange);
    outline: 2px solid salmon;
    color: #333;
  }

  &::placeholder {
    color: #aaa;
  }
`

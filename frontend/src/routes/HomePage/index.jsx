import {
  BaseArticle,
  DivWithLine,
  GridContainer,
  SectionContainer,
  SimpleButton,
} from '../../styles'

const HomePage = () => {
  return (
    <SectionContainer>
      <h1>Home Page</h1>
      <SimpleButton>Try me!</SimpleButton>

      <GridContainer>
        <DivWithLine>Div with line in grid container</DivWithLine>
        <DivWithLine>Div with line in grid container</DivWithLine>
        <DivWithLine>Div with line in grid container</DivWithLine>
        <DivWithLine>
          <BaseArticle>Base article element inside div with line</BaseArticle>
        </DivWithLine>
        <BaseArticle>Base article element</BaseArticle>
        <BaseArticle>Base article element</BaseArticle>
        <BaseArticle>Base article element</BaseArticle>
        <BaseArticle>Base article element</BaseArticle>
      </GridContainer>
    </SectionContainer>
  )
}
export default HomePage

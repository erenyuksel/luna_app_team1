import styled from 'styled-components'
import coverBg from '../../assets/images/luna-home-bg.png'

// Styled components for the AboutUsPage
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9147, #ffc287);
  position: relative;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${coverBg}) center center/cover;
  opacity: 0.5;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 70%;
  padding: 2rem;
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Semi-transparent white background */
  border-radius: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 15px;
`

const List = styled.ul`
  margin-left: 20px;
`

const ListItem = styled.li`
  list-style-type: disc;
  margin-bottom: 8px;
  color: #333;
`

// AboutUsPage component
const AboutUsPage = () => {
  return (
    <Container>
      <BackgroundOverlay />
      <Content>
        <Title>ABOUT US</Title>
        <Paragraph>
          Welcome to Luna, your ultimate destination for restaurant reviews! We
          are passionate about food and committed to helping you discover the
          best dining experiences in your area.
        </Paragraph>
        <Paragraph>Our mission is to:</Paragraph>
        <List>
          <ListItem>Provide honest and unbiased restaurant reviews</ListItem>
          <ListItem>
            Help you find the perfect dining spot for any occasion
          </ListItem>
          <ListItem>
            Support local restaurants and celebrate culinary diversity
          </ListItem>
        </List>
        <Paragraph>
          At Luna, you will find detailed reviews, ratings, and recommendations
          from fellow diners, ensuring that you can make informed decisions
          about where to eat.
        </Paragraph>
        <Paragraph>
          Whether you are craving a cozy brunch spot, a trendy dinner spot, or a
          hidden gem off the beaten path, Luna is here to guide you on your
          culinary adventures.
        </Paragraph>
        <Paragraph>
          Thank you for choosing Luna as your trusted source for restaurant
          reviews. Happy dining!
        </Paragraph>
      </Content>
    </Container>
  )
}

export default AboutUsPage

import styled from 'styled-components'
import { Cover } from '../../../styles'
import coverBg from '../../../assets/photos/sample-rest.jpeg'

export const ReviewCover = styled(Cover)`
  position: static;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverBg});
  height: 24vh;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  p, div {
    font-weight: 300;
    line-height: 2;
  }
`

export const FormContainer = styled.form`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 40rem;
`

export const StarsContainer = styled.div`
  align-self: baseline;
  /* margin-top: 10rem; */
  display: flex;
`

export const Textarea = styled.textarea`
  border: 1px solid #dfdcdc;
  padding: 1rem;
  margin: 1rem 0;
  width: 100%;
  min-height: 12rem;
`

export const SelectYourRating = styled.section`
  font-weight: 200;
  padding-top: 0.3rem;
  margin-left: 2rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  align-self: baseline;
`


export const RestaurantInfo = styled.div`
  color: var(--white);
`
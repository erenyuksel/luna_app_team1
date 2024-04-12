import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { addNewReview } from '../../../axios/addNewReview'
import {
  CenteredSectionContainer,
  MainContainer,
  SectionContainer,
  SimpleButton,
} from '../../../styles'
import {
  SelectYourRating,
  StarsContainer,
  Textarea,
  ErrorMessage,
  FormContainer,
  ReviewCover,
  RestaurantInfo,
} from './styles'

const colors = { orange: '#FFD700', grey: '#a9a9a9' }

const NewReview = () => {
  const { restId } = useParams() // Get restId from URL
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const [review, setReview] = useState('')
  const [isReviewValid, setIsReviewValid] = useState(true)
  const stars = Array(5).fill(0)

  const handleClick = (value) => setCurrentValue(value)
  const handleMouseOver = (newHoverValue) => setHoverValue(newHoverValue)
  const handleMouseLeave = () => setHoverValue(undefined)
  const handleReviewChange = (event) => {
    const text = event.target.value
    setReview(text)
    setIsReviewValid(text.length >= 10)
  }
  const handleSubmit = async () => {
    if (!isReviewValid) {
      alert('Please write a review with at least 10 characters.')
      return
    }
    const formData = { rating_stars: currentValue, text_content: review }
    try {
      const response = await addNewReview(restId, formData)
      console.log('Review added successfully:', response)
      setCurrentValue(0)
      setReview('')
      setIsReviewValid(true)
    } catch (error) {
      console.error('Error adding new review:', error)
    }
  }

  return (
    <MainContainer>
      <ReviewCover>
        <SectionContainer>
          <RestaurantInfo>
            {/* <h2>{restaurant.name}</h2> */}
            <p>Restaurant category?</p>
            <div>Rating with stars</div>
          </RestaurantInfo>
        </SectionContainer>
      </ReviewCover>
      <CenteredSectionContainer>
        <FormContainer>
          <StarsContainer>
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size="1.8rem"
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{ marginRight: 10, cursor: 'pointer' }}
              />
            ))}
            <SelectYourRating>Select your Rating</SelectYourRating>
          </StarsContainer>
          <Textarea
            placeholder="Your review helps others learn about great local businesses..."
            value={review}
            onChange={handleReviewChange}
          />
          {!isReviewValid && (
            <ErrorMessage>Review must be at least 50 characters.</ErrorMessage>
          )}
          <SimpleButton
            type="button"
            style={{ alignSelf: 'flex-end' }}
            onClick={handleSubmit}
          >
            Submit
          </SimpleButton>
        </FormContainer>
      </CenteredSectionContainer>
    </MainContainer>
  )
}

export default NewReview
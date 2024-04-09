import { SectionContainer, SimpleButton } from '../../../styles'
import { FaStar } from "react-icons/fa";
import { useState } from "react";

import { Container, SelectYourRating, StarsContainer, Textarea, ErrorMessage } from './styles'; // Assuming you have imported the styled components correctly


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const NewReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [review, setReview] = useState('');
  const [isReviewValid, setIsReviewValid] = useState(true);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
    setIsReviewValid(event.target.value.length >= 50); // Update validity based on length of review
  };

  const handleSubmit = () => {
    if (review.length === 0) {
      alert("Please write a review before submitting.");
      return;
    }
    if (!isReviewValid) {
      alert("Please write a review with at least 50 characters.");
      return;
    }
    // Perform submission logic here
  };

  return (
    <SectionContainer>
    <Container>
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
            style={{ marginRight: 10, cursor: "pointer" }}
          />
        ))}
        <SelectYourRating>Select your Rating</SelectYourRating>
      </StarsContainer> 
      <Textarea 
        placeholder="Your review helps others learn about great local businesses.
                     Please don't review this business if you received a freebie for
                    writing this review, or if you're connected in any way to the owner or employees." 
        value={review}
        onChange={handleReviewChange}
      />
      {!isReviewValid && <ErrorMessage>Review must be at least 50 characters.</ErrorMessage>}
      <SimpleButton type="button" style={{ alignSelf: 'flex-end' }} onClick={handleSubmit}>Submit</SimpleButton>
    </Container>
    </SectionContainer>
  );
};

export default NewReview;

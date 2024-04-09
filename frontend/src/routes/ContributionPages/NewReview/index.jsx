import { SectionContainer, SimpleButton } from '../../../styles'
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";



const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const StarsContainer = styled.div`
  align-self: baseline;
   margin-top: 10rem;
   display: flex;
    flex-direction: row;
  `;
  
  const Textarea = styled.textarea`
    border: 0.0625rem solid #dfdcdc; 
    padding: 1rem; 
    margin: 1.25rem 0; 
    min-height: 15rem; 
    min-width: 35rem; 
  
  `;

  const SelectYourRating = styled.section`
    font-weight: 200;
    padding-top: 0.3rem;
    margin-left: 2rem;
  `;

const NewReview = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
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
        minLength={50}
        required/>
      <SimpleButton type="button" style={{ alignSelf: 'flex-end' }} >Submit</SimpleButton>
    </Container>
    </SectionContainer>
  );
};

export default NewReview;
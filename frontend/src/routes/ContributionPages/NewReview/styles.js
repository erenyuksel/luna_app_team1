import styled from "styled-components";


 
  
  export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  export const StarsContainer = styled.div`
  align-self: baseline;
   margin-top: 10rem;
   display: flex;
    flex-direction: row;
  `;
  
  export const Textarea = styled.textarea`
    border: 0.0625rem solid #dfdcdc; 
    padding: 1rem; 
    margin: 1.25rem 0; 
    min-height: 15rem; 
    min-width: 35rem; 
  
  `;

export const SelectYourRating = styled.section`
    font-weight: 200;
    padding-top: 0.3rem;
    margin-left: 2rem;
  `;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  align-self: baseline;
`;
import styled from "styled-components";

  
  export const ReviewsSection = styled.section`
    background-color: #fff;
    padding: 75px 17px 0;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `;
  
  export const ReviewCard = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `;
  
  export const ReviewHeader = styled.header`
    display: flex;
    gap: 20px;
    @media (max-width: 991px) {
      max-width: 100%;
      flex-wrap: wrap;
    }
  `;
  
  export const ReviewTitle = styled.h2`
    color: #4c4c4c;
    flex-grow: 1;
    font: 400 20px Roboto, sans-serif;
  `;
  
  export const ReviewDate = styled.time`
    color: #303030;
    text-align: right;
    font: 300 12px Roboto, sans-serif;
  `;
  
  export const ReviewImage = styled.img`
    width: 20%;
    margin-top: 16px;
    object-fit: cover;
    border: 1px solid #ebebeb;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `;
  
  export const ReviewDescription = styled.p`
    color: #303030;
    text-align: justify;
    margin-top: 16px;
    font: 300 16px Roboto, sans-serif;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `;
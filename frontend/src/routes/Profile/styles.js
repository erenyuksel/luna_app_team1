import styled from "styled-components"
import coverBg from "../../assets/zurich_background.jpg"


export const Cover = styled.div`
  height: 20vh;
  width: 100%;

  position: relative;
  z-index: 1;

  background-size: cover; 
  background-position: center; 
  background-image: url(${coverBg});
`;

export const UserSectionContainer = styled.section`
  position: relative;
  z-index: 2; 
  margin-top: -7rem;
  `

export const ProfilePictureIcon = styled.img`
  height: 14.631rem;
  width: 14.5rem;
  position: absolute;
  margin: 0 !important;
  bottom: -7.506rem;
  left: 8.188rem;
  object-fit: cover;
  z-index: 2;
`;
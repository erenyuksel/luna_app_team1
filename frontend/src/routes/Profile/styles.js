import styled from "styled-components"
import coverBg from "../../assets/zurich_background.jpg"
import { Cover, GridContainer } from "../../styles"




export const UserCover = styled(Cover)`
  height: 20vh;
  width: 100%;

  /*position: relative;
  z-index: 1;*/

  background-size: cover; 
  background-position: center; 
  background-image: url(${coverBg});
`;

export const UserGridContainer = styled(GridContainer)`
display:grid;
grid-template-columns: 0.7fr 1.8fr 0.5fr; 
  grid-template-rows: 0.6fr 1.2fr 1.2fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Picture Picture Picture"
    "NavProfile Reviews UserInfo"
    ". . ."; 

.NavProfile { grid-area: NavProfile; }
.Reviews { grid-area: Reviews; }
.UserInfo { grid-area: UserInfo; }
.cover { grid-area: Picture; }
 
margin-top: 20%;

`;

export const UserWrapper = styled.div`

`;
export const UserSectionContainer = styled.section`
  width: 100%;
  margin: 0 !important;

  position: relative;
  z-index: 2; 
  margin-top: -7rem;
  position: absolute;
  top: 4.375rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
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

export const UserInfoWrapper= styled.div`
align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
padding: 0rem var(--padding-xl) 0rem var(--padding-2xl);
box-sizing: border-box;
max-width: 100%;
`;
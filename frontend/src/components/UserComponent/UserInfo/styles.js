import styled from "styled-components";


  
  export const ProfilAboutContainer = styled.section`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-size: 20px;
    color: #000;
    padding: 28px 20px 0;
  
    @media (max-width: 991px) {
      margin-top: 40px;
    }
  `;
  
  export const ProfileTitle = styled.h2`
    color: #303030;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  `;
  
  
  export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  `;
  
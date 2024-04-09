import styled from 'styled-components'
import coverBg from '../../assets/zurich_background.jpg'
import { Cover, GridContainer, SectionContainer } from '../../styles'

export const UserCover = styled(Cover)`
  position: relative;
  background-image: url(${coverBg});
  height: 24vh;
`

export const UserGridContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;
  grid-template-rows: 100px auto;

  position: relative;
  z-index: 2;
  margin-top: -100px;

  gap: 0;

  grid-template-areas:
    'photonav stats .'
    'photonav reviews info';

  @media (max-width: 1024px) {
    grid-template-columns: min-content auto;
    grid-template-rows: auto;

    grid-template-areas:
      'photonav stats'
      'photonav info'
      '. reviews';
  }

  @media (max-width: 788px) {
    grid-template-areas:
      'photonav stats'
      'photonav stats'
      'reviews reviews'
      'info info';
  }

`

export const UserPhotoNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  grid-area: photonav;
`

export const ProfilePicture = styled.img`
  max-height: 220px;
  max-width: 220px;
  width: 100%;
  margin: 0 !important;
  object-fit: cover;
`

export const SectionTitle = styled.h3`
  text-transform: uppercase;
`
import styled from 'styled-components'

export const ProfilAboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  grid-area: info;
`

export const ProfileAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  font-size: 0.9rem;

  & > :last-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 2fr;
    gap: 1.2rem;
  }

  @media (max-width: 788px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const UserStatistics = styled.div`
  max-height: min-content;
  padding: 1rem;

  font-size: 0.8rem;
  line-height: 1.2;
  color: var(--white);

  grid-area: stats;
`

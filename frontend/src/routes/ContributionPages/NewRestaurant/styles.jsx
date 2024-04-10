import styled from 'styled-components'

export const AddRestaurantForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  @media (max-width: 788px) {
    grid-template-columns: 1fr;
  }

  & > :last-child {
    grid-column: 1 / -1;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0;
  }
`
export const SectionTitle = styled.h4`
  grid-column: 1 / -1;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 0.8rem;
  line-height: 2;
  color: var(--dark-gray);

`

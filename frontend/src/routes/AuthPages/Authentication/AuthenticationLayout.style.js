import styled from 'styled-components'

export const SignInHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 50rem;
  gap: 2rem;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem;
  }
`

export const AuthFormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 1rem;
  }
`

export const AuthForm = styled.form`
  width: 100%;
  max-width: 25rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .input-container {
    flex: 1;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`
export const AuthFormGrid = styled.form`
  width: 100%;
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  .input-container {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .form-footer {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`

export const CenterIt = styled.div`
  display: flex;
  height: 7rem;
  width: 50rem;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`

export const InputFieldContainer = styled.div`
  width: 20rem;
  max-width: 20rem;

  label {
    text-transform: capitalize;
  }

  .input-wrapper {
    position: relative;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    ::placeholder {
      color:rgb(169, 169, 172);
    }

    input {
      border: none;
      flex: 1 1 24rem;
      padding: 1rem 1rem;
      font: inherit;
      background-color: white;
      font-size: 1rem;
      color: gray;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`
export const ConfirmationText = styled.p`
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0.5rem;
`

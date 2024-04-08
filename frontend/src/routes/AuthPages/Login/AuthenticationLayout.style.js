import styled from 'styled-components'

export const SignInHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50rem;
  border: 1px red solid;
  gap: 2rem;
  font-size: 0.8rem;
`

export const AuthFormContainer = styled.div`
  height: 50rem;
  width: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthForm = styled.form`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input-container {
    flex: 1;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1em;
  grid-column: 1/-1;
`

export const InputFieldContainer = styled.div`
  width: 20rem;

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

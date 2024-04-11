import styled from 'styled-components'

export const EditProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #b3b3b3;

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 15rem;
  }

  label {
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`

export const DeleteAccountStyle = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: darkred;
`
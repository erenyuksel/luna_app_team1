import React, { useState } from 'react'
import { DivWithBottomLine, SectionContainer, SimpleButton } from '../../../styles'
import { useNavigate } from 'react-router-dom'
import useApiRequest from '../../../axios/useApiRequest'
import { AuthForm, AuthFormContainer, ErrorMessage, InputFieldContainer } from '../Login/AuthenticationLayout.style'

const SignUp = () => {

  const [userEmail, setEmail] = useState('')
  const navigate = useNavigate()
  const { sendRequest, error, data } = useApiRequest()

  const handleSignUpClick = async(e) => {
    e.preventDefault()
    sendRequest('post', 'auth/registration/', {email: userEmail})
  }

  if (data === 'success') {
    localStorage.setItem('registered_email', userEmail)
    navigate('/congratulation')
  }

  return (
    <>
      <SectionContainer>
        <AuthFormContainer>
          <AuthForm>
            <div className={'input-container'}>
              <DivWithBottomLine>REGISTRATION</DivWithBottomLine>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  {/* <img src={LetterIcon}></img> */}
                  <input
                    placeholder="Email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error?.email && <ErrorMessage>{error.email}</ErrorMessage>}
              </InputFieldContainer>
              {error?.detail && <ErrorMessage>{error.detail}</ErrorMessage>}
            </div>
            <div>
              <SimpleButton onClick={handleSignUpClick}>Register</SimpleButton>
              {/* <CreateAccountProgress step={1}/> */}
            </div>
          </AuthForm>
        </AuthFormContainer>
      </SectionContainer>
    </>
  )
}

export default SignUp

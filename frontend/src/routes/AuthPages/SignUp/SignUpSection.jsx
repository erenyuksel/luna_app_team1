import React, { useState } from 'react'
import {
  DivWithBottomLine,
  SectionContainer,
  SimpleButton,
} from '../../../styles'
import { Link, useNavigate } from 'react-router-dom'
import {
  AuthForm,
  AuthFormContainer,
  CenterIt,
  ErrorMessage,
  InputFieldContainer,
} from '../Authentication/AuthenticationLayout.style'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'
import AxiosUser from '../../../axios/useApiRequest'

const SignUp = () => {
  const [userEmail, setEmail] = useState('')
  const navigate = useNavigate()
  const { sendRequest, error, data } = useApiRequest()

  const handleSignUpClick = async (e) => {
    e.preventDefault()
    // const register = sendRequest('post', 'users/registration/', { email: userEmail })
    try {
      const res = await AxiosUser.post('/users/registration/', {
        email: userEmail,
      })
      navigate('/signup/congratulations')
    } catch (errors) {
      console.log(error)
    }
  }

  // if (data === 'success') {
  //   localStorage.setItem('registered_email', userEmail)
  //   navigate('/congratulations')
  // }

  return (
    <>
      <SectionContainer>
        <AuthFormContainer>
          <AuthForm>
            <div className={'input-container'}>
              <CenterIt>
                <DivWithBottomLine>REGISTRATION</DivWithBottomLine>
              </CenterIt>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
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
              <CreateAccountProgress step={1} />
            </div>
          </AuthForm>
        </AuthFormContainer>
      </SectionContainer>
    </>
  )
}

export default SignUp

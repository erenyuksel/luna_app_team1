import React, { useEffect, useState } from 'react'
import {
  BaseArticle,
  DivWithBottomLine,
  SectionContainer,
  SimpleButton,
} from '../../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import {
  AuthForm,
  AuthFormContainer,
  CenterIt,
  InputFieldContainer,
  ErrorMessage,
} from '../Authentication/AuthenticationLayout.style'
import useApiRequest, { getMyProfileData } from '../../../axios/useApiRequest'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'
import { loginUser, userObject } from '../../../store/slices/loggedInUser'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      const res = await useApiRequest.post('/auth/token/', {
        email,
        password,
      })
      const token = res.data.access
      navigate('/profile')
      dispatch(loginUser(token))
      window.localStorage.setItem('token', token)
      const user = await getMyProfileData(token)
      dispatch(userObject(user.data))
    } catch (errors) {
      setError(errors.response.data.detail)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SectionContainer>
        <AuthFormContainer>
          <AuthForm onSubmit={handleLogin}>
            <div className={'input-container'}>
              <CenterIt>
                <DivWithBottomLine>LOGIN</DivWithBottomLine>
              </CenterIt>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  <input
                    placeholder="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </InputFieldContainer>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </InputFieldContainer>
            </div>
            <div className={'form-footer'}>
              <SimpleButton type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Sign In'}
              </SimpleButton>
              <CreateAccountProgress />
            </div>
          </AuthForm>
        </AuthFormContainer>
      </SectionContainer>
    </>
  )
}

export default Login

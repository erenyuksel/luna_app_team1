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
} from '../Authentication/AuthenticationLayout.style'
import useApiRequest, { getMyProfileData } from '../../../axios/useApiRequest'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'
import { loginUser } from '../../../store/slices/loggedInUser'

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await useApiRequest('post', 'auth/token/', {
        email: user.email,
        password: user.password,
      })
      const token = res.data.access
      navigate('/profile')
      dispatch(loginUser(token))
      window.localStorage.setItem('token', token)
      const user = await getMyProfileData(token)
      dispatch(userObject(user.data))
    } catch (errors) {
      console.log(errors)
    }
  }
  //   sendRequest('post', 'auth/token/', user)
  // }

  // // useEffect(() => {
  // //   isLoggedIn && navigate('/profile');
  // // }, []);

  // useEffect(() => {
  //   if (data) {
  //     dispatch(loginUser({ user: data.user, accessToken: data.access }))
  //     window.localStorage.setItem('user', JSON.stringify(data.user))
  //     localStorage.setItem('auth-token', data.access)
  //     navigate('/')
  //   }
  // }, [data, dispatch, navigate])

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
                    onChange={handleInput}
                    id="email"
                  />
                </div>
                {/* {error?.email && <ErrorMessage>{error.email}</ErrorMessage>} */}
              </InputFieldContainer>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    onChange={handleInput}
                    id="password"
                  />
                </div>
                {/* {error?.password && ( */}
                {/* <ErrorMessage>{error.password}</ErrorMessage> */}
                {/* )} */}
              </InputFieldContainer>
              {/* {error?.detail && (
                <p className={'error-message'}>{error.detail}</p> */}
              {/* )} */}
            </div>
            <div className={'form-footer'}>
              <SimpleButton onClick={handleLogin}>sign in</SimpleButton>
              <CreateAccountProgress />
            </div>
          </AuthForm>
        </AuthFormContainer>
      </SectionContainer>
    </>
  )
}

export default Login

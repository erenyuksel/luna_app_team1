import React, { useEffect, useState } from 'react'
import { BaseArticle, DivWithBottomLine, SectionContainer, SimpleButton } from '../../../styles'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { AuthForm, AuthFormContainer, FormTitle, InputFieldContainer } from './AuthenticationLayout.style'
import useApiRequest from '../../../axios/useApiRequest'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'


const Login = () => {

  const [user, setUser] = useState({email: undefined, password: undefined})
  const navigate = useNavigate()
  const {sendRequest, data, error} = useApiRequest()
  const dispatch = useDispatch()

  const handleInput = (e) => {
    setUser({...user, [e.target.id]: e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    sendRequest('post', 'auth/token/', user)
  }

  useEffect(() => {
    if(data){
      dispatch(loginUser({user: data.user, accessToken: data.access}))
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('auth-token', data.access)
      navigate('/posts')
    }
  }, [data, dispatch, navigate])

  // const onSubmitHandler = async () => {
  //   setError(null)
  //   try {
  //     const res = await AxiosMotion.post('/auth/token/', {
  //       email,
  //       password,
  //     })
  //     const accessToken = res.data.access
  //     window.localStorage.setItem('accessToken', accessToken)

  //     dispatch(login_user(accessToken))

  //     const from = location.state?.from || '/posts'
  //     console.log(from)
  //     navigate(from)
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  return (
    <>
      <SectionContainer>
        {/* <SignInHeader>
          <p>Don&apos;t have an account?</p>
          <Link to="/signup">
            <SimpleButton>sign up</SimpleButton>
          </Link>
        </SignInHeader> */}
        <AuthFormContainer>
          <AuthForm onSubmit={handleLogin}>
            <div className={'input-container'}>
              <DivWithBottomLine>LOGIN</DivWithBottomLine>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  {/* <img src={AvatarIcon}></img> */}
                  <input
                    placeholder="Email"
                    type="email"
                    required
                    onChange={handleInput}
                    id="email"
                  />
                </div>
                {error?.email && <ErrorMessage>{error.email}</ErrorMessage>}
              </InputFieldContainer>
              <InputFieldContainer>
                <div className={'input-wrapper'}>
                  {/* <img src={PasswordIcon} alt="Password icon "/> */}
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    onChange={handleInput}
                    id="password"
                  />
                </div>
                {error?.password && <ErrorMessage>{error.password}</ErrorMessage>}
              </InputFieldContainer>
              {error?.detail && <p className={'error-message'}>{error.detail}</p>}
            </div>
            <div className={'form-footer'}>
              <SimpleButton onClick={handleLogin}>sign in</SimpleButton>
              <CreateAccountProgress/>
            </div>
          </AuthForm>
        </AuthFormContainer>
      </SectionContainer>
    </>
  )
}

export default Login

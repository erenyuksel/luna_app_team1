import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AuthFormContainer,
  AuthFormGrid,
  CenterIt,
  ErrorMessage,
} from '../Authentication/AuthenticationLayout.style'
import { DivWithBottomLine, SimpleButton } from '../../../styles'
import useApiRequest, { getMyProfileData } from '../../../axios/useApiRequest'
import InputField from '../Login/InputField'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'
import { useDispatch } from 'react-redux'
import { loginUser, userObject } from '../../../store/slices/loggedInUser'

const Verification = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    code: '',
    password: '',
    password_repeat: '',
    first_name: '',
    last_name: '',
    location: '',
  })

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value })
  }

  const handleValidationSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      setIsLoading(true)
      await useApiRequest.patch('/users/validation/', userData)

      const res = await useApiRequest.post('/auth/token/', {
        email: userData.email,
        password: userData.password,
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
      <AuthFormContainer>
        <AuthFormGrid className="activation-form">
          <CenterIt>
            <DivWithBottomLine>VERIFICATION</DivWithBottomLine>
          </CenterIt>
          <div className="input-container">
            <InputField
              placeholder="E-mail address"
              type="email"
              userData={userData}
              id={'email'}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Username'}
              id={'username'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'First Name'}
              id={'first_name'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Last Name'}
              id={'last_name'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Password'}
              type={'password'}
              id={'password'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Validation code'}
              type="text"
              id={'code'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Location'}
              type="text"
              id={'location'}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Repeat Password'}
              type="password"
              id={'password_repeat'}
              userData={userData}
              handleInput={handleInput}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </div>
          <div>
            <CenterIt>
              <SimpleButton onClick={handleValidationSubmit}>
                Finish Registration
              </SimpleButton>
            </CenterIt>
            <CreateAccountProgress step={3} />
          </div>
        </AuthFormGrid>
      </AuthFormContainer>
    </>
  )
}

export default Verification

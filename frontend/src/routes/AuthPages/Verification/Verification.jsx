import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AuthFormContainer,
  AuthFormGrid,
  CenterIt,
  ErrorMessage,
} from '../Authentication/AuthenticationLayout.style'
import { DivWithBottomLine, SimpleButton } from '../../../styles'
import useApiRequest from '../../../axios/useApiRequest'
import InputField from '../Login/InputField'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'
import { useDispatch } from 'react-redux'
import { loggedInUser } from '../../../store/slices/loggedInUser'

const Verification = () => {
  const registeredEmail = localStorage.getItem('registered_email')
  const [userData, setUserData] = useState({
    email: registeredEmail || '',
    first_name: '',
    last_name: '',
    username: '',
    code: '',
    password: '',
    password_repeat: '',
    location: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value })
  }

  const handleValidationSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      setIsLoading(true)
      await useApiRequest.patch('users/validation/', userData)

      const res = await useApiRequest.post('/auth/token/', {
        email: userData.email,
        password: userData.password,
      })

      const token = res.data.access
      navigate('/profile')
      dispatch(loggedInUser(token))
      window.localStorage.setItem('token', token)
    } catch (errors) {
      setError(errors.response.data.detail)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (error === 'success') {
      navigate('/profile')
      localStorage.removeItem('registered_email')
    }
  }, [error, navigate])

  // sendRequest('patch', 'users/validation/', userData)
  // .then((response) => {
  //   console.log('Response:', response);
  // })
  // .catch((error) => {
  // console.error('Error during validation:', error);
  // });
  // };

  // useEffect(() => {
  //   if (data === 'success') {
  //     navigate('/profile')
  //     localStorage.removeItem('registered_email')
  //   }
  // }, [data, navigate])

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
              // error={error}
              type="email"
              userData={userData}
              id={'email'}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Username'}
              id={'username'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'First Name'}
              id={'first_name'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Last Name'}
              id={'last_name'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />

            <InputField
              placeholder={'Password'}
              type={'password'}
              id={'password'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Validation code'}
              type="text"
              id={'code'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Location'}
              type="text"
              id={'location'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            <InputField
              placeholder={'Repeat Password'}
              type="password"
              id={'password_repeat'}
              // error={error}
              userData={userData}
              handleInput={handleInput}
            />
            {/* {error?.non_field_errors && (
              // <ErrorMessage>{error.non_field_errors}</ErrorMessage>
            )} */}
            {/* {error?.detail && <ErrorMessage>{error.detail}</ErrorMessage>} */}
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

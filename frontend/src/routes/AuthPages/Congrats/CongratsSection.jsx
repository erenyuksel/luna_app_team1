import { Link } from 'react-router-dom'
import { DivWithBottomLine, SimpleButton } from '../../../styles'
import {
  AuthForm,
  AuthFormContainer,
  CenterIt,
  ConfirmationText,
} from '../Authentication/AuthenticationLayout.style'
import CreateAccountProgress from '../AccountProgress/CreateAccountProgress'

const Congratulations = () => {
  const userEmail = localStorage.getItem('registered_email')

  return (
    <>
      <AuthFormContainer>
        <AuthForm>
          <div className={'input-container'}>
            <CenterIt>
              <DivWithBottomLine>Congratulations!</DivWithBottomLine>
            </CenterIt>
            {/* <CheckMark src={CheckMarkIcon} alt="Check mark"/> */}
            <ConfirmationText>
              We've sent a confirmation code to your email. Our hard working
              monkeys are preparing a digital message that will be delivered at
              your doorstep, fast like Amazon baybeee. <br />
              {userEmail}
            </ConfirmationText>
          </div>
          <div>
            <Link to="/signup/verification">
              <SimpleButton>continue</SimpleButton>
            </Link>
            <CreateAccountProgress step={2} />
          </div>
        </AuthForm>
      </AuthFormContainer>
    </>
  )
}

export default Congratulations

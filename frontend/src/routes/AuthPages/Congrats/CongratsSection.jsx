import { Link } from "react-router-dom"
import { DivWithBottomLine, SimpleButton } from "../../../styles"
import { AuthFormContainer, ConfirmationText } from "../Login/AuthenticationLayout.style"

const CongratsSection = () => {
    const userEmail = localStorage.getItem('registered_email')

    return (
        <>
        <AuthFormContainer>
            <AuthForm>
                <div className={'input-container'}>
                    <DivWithBottomLine>Congratulations!</DivWithBottomLine>
                    <CheckMark src={CheckMarkIcon} alt="Check mark"/>
                    <ConfirmationText>We've sent a confirmation code to your email <br/>
                        {userEmail}
                        </ConfirmationText>
                </div>
                <div>
                    <Link to="/verification">
                        <SimpleButton>continue</SimpleButton>
                    </Link>
                    <CreateAccountProgress step={2}/>
                </div>
            </AuthForm>
        </AuthFormContainer>
        </>
    )
}

export default CongratsSection
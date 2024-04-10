import { Outlet } from "react-router-dom"
import HomePage from "../../HomePage"
import styled from 'styled-components'
import Login from "../Login/SignInSection"

const AuthenticationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
`

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    > div {
        width: 100%;
        height: 100%;
    }
`

const AuthenticationLayout = () => {
    return <HomePage>
        <Login>
            <AuthenticationContainer>
                <Outlet/>
            </AuthenticationContainer>
        </Login>
    </HomePage>
        }

export default AuthenticationLayout
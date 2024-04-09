import styled from 'styled-components'

export const ProgressCirclesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    height: 3rem;
`
const CreateAccountProgress = ({step}) => {
    return (
      <ProgressCirclesContainer step={step}>
        {step && 
          <>
            <div className={'circle'}></div>
            <div className={'circle'}></div> 
            <div className={'circle'}></div>
          </>
        }
      </ProgressCirclesContainer>
    )
}

export default CreateAccountProgress
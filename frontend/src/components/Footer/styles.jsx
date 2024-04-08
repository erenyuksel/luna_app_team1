import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { DivWithShadow, SimpleButton } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 1rem 3rem;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  gap: 0.5rem;
`

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
`
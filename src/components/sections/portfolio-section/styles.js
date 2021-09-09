import styled from 'styled-components'
import { StyledSection } from '../../../themes/global-style'
import Button from '../../ui/button'

export const StyledPortfolio = styled(StyledSection)`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};
`

export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, max-content));
  gap: 1.5rem;
  justify-content: center;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, max-content));
  }

`

export const StyledButton = styled(Button)`
  margin: 4rem auto 0;
  font-size: 110%;
`

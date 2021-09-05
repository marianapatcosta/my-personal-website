import styled from 'styled-components'
import { StyledSection } from '../../../themes/global-style'
import Button from '../../ui/button'

export const StyledWriting = styled(StyledSection)`
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};
`

export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem, max-content));
  gap: 1.5rem;
  justify-content: center;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, max-content));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, max-content));
  }
`

export const StyledButton = styled(Button)`
  margin: 4rem auto 0;
  font-size: 110%;
`

export const StyledNoItems = styled.p`
  font-size: 110%;
  font-style: italic;
  margin: 3rem 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 4rem 0;
  }
`

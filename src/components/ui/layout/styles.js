import styled from 'styled-components'
import TalkToMe from '../talk-to-me'

export const StyledMain = styled.main`
  padding-top: 4rem;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 5rem;
  }

  @media print {
    padding-top: 0;
  }
`

export const StyledTalkToMe = styled(TalkToMe)`
 
`

import styled from 'styled-components'

export const StyledMain = styled.main`
  padding-top: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 5rem;
  }

  @media print {
    padding-top: 0;
  }
`

import styled from 'styled-components'

export const StyledFooter = styled.footer`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.font};
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  position: relative;
  margin-top: 1rem;
  font-size: 85%;

  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 100%;
    position: absolute;
    top: -1rem;
    z-index: -1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 3.5rem;

    img {
      top: -1.5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 4rem;

    img {
      top: -2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      top: -3rem;
    }
  }
`

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
  font-size: 85%;

  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 100%;
    position: absolute;
    top: -1rem;
    user-select: none;
  }

  p {
    z-index: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 3.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 4rem;

    img {
      top: -2.9rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    img {
      top: -3.25rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    img {
      top: -4.6rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    img {
      top: -4.6rem;
    }
  }
`

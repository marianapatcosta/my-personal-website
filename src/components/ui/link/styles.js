import styled from 'styled-components'

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.highlight};
  width: max-content;
  min-width: 3.5rem;
  height: 1.4rem;
  padding: 0.2rem 0.7rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5rem;
  border-radius: 1.4rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0.2rem ${({ theme }) => theme.colors.highlightDark};
  transition: box-shadow 0.5s ease-in-out 0.3s;
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
    cursor: default;

  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 1.8rem;
    padding: 0.2rem 1rem;
    box-shadow: 0 0.3rem ${({ theme }) => theme.colors.highlightDark};
  }

  :hover {
    box-shadow: 0 0.3rem ${({ theme }) => theme.colors.buttonShadow};
    transition: box-shadow 0.5s ease-in-out 0s;
  }

  :active {
    box-shadow: 0 0.15rem ${({ theme }) => theme.colors.buttonShadow};
    transform: translateY(0.15rem);
    transition: box-shadow 0s ease-in-out 0s;
  }

  ::after {
    position: absolute;
    content: '';
    height: 0%;
    width: 110%;
    bottom: -10%;
    left: -0.3rem;
    background-color: ${({ theme }) => theme.colors.font};
    transition: height 0.8s ease-in-out;
  }

  :hover:after {
    height: 110%;
  }

  img {
    height: 1rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.iconFont};
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 1.1rem;
    }
  }

  span {
    z-index: 1;
  }
`

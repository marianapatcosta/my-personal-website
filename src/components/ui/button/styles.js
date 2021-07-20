import styled, { css, keyframes } from 'styled-components'

const shake = keyframes`
  0% {
    transform: rotate(40deg);
  }
  3% {
    transform: rotate(-35deg);
  }
  5% {
    transform: rotate(25deg);
  }
  8% {
    transform: rotate(-15deg);
  }
  12% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0);
  }
`

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(20);
    opacity: 0.5;
  }
  100% {
    transform: scale(70);
    opacity: 0;
  }
}`

export const StyledButton = styled.button`
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0.7rem;
  color: ${({ theme }) => theme.colors.highlight};
  border: 0.0625rem solid ${({ theme }) => theme.colors.highlight};
  line-height: 1.1em;
  border-radius: 1.4rem;
  position: relative;
  overflow: hidden;
  user-select: none;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0.0625rem 0.2rem 0 ${({ theme }) => theme.colors.shadow};

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
    cursor: default;

  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.2rem 1rem;
    width: 7rem;
    height: 3rem;
  }

  :hover {
    opacity: 80%;
  }

  img {
    height: 1rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.iconHighlight};
    z-index: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      height: 1.1rem;
    }
  }

  span {
    z-index: 1;
  }

  ${({ hasShaking }) =>
    hasShaking &&
    css`
      animation: ${shake} 10s ease-in 5s infinite;
      -webkit-animation: ${shake} 10s ease-in 5s infinite;
    `}
`

export const StyledRipple = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.highlightLight};
  display: block;
  content: '';
  border-radius: 50%;
  animation: ${ripple} 0.9s ease-in forwards;
`

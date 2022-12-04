import styled, { css, keyframes } from 'styled-components'

const typeClass = (type, colors) => {
  const toastTypesClasses = {
    alert: colors.red,
    info: colors.blue,
    success: colors.green,
    warning: colors.yellow,
  }
  return toastTypesClasses[type]
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const StyledToast = styled.div`
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  width: 85%;
  max-width: 20rem;
  position: fixed;
  top: 4rem;
  right: 1rem;
  padding: 1rem;
  z-index: 30;
  display: flex;
  align-items: flex-start;
  border-radius: 0.2rem;
  animation: ${fadeIn} 0.5s;
  -webkit-animation: ${fadeIn} 0.5s;
  background-color: ${({ theme, type }) =>
    !!type && typeClass(type, theme.colors)};

  ${({ willBeDeleted }) =>
    willBeDeleted &&
    css`
      animation: ${fadeOut} 0.5s;
      -webkit-animation: ${fadeOut} 0.5s;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 75%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 30%;
  }
`

export const StyledToastClose = styled.button`
  position: absolute;
  top: 0;
  right: 0.5rem;
  width: 0.7rem;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(90deg);
  }
  span {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const StyledToastIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledToastMessage = styled.p`
  font-size: 95%;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.15rem;
  padding: 0 1rem;
`

export const StyledToastMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`

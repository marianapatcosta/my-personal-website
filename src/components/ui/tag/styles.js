import styled from 'styled-components'

export const StyledTag = styled.button`
  font: inherit;
  min-width: 5rem;
  height: 1.8rem;
  padding: 0.2rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.font};
  line-height: 1.1rem;
  border-radius: 1.4rem;
  overflow: hidden;
  box-shadow: 0 0.3rem ${({ theme }) => theme.colors.shadow};
  user-select: none;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  position: relative;

  span {
    position: relative;
    z-index: 1;
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.5s ease-in-out 0s;

    ${({ $isActive }) =>
      $isActive
        ? `
        box-shadow: 0 0.15rem ${({ theme }) => theme.colors.highlightDark};
        transform: translateY(0.15rem);
    `
        : `box-shadow: 0 0.3rem ${({ theme }) => theme.colors.highlightDark};`};
  }

  ::after {
    position: absolute;
    content: '';
    height: 0%;
    width: 110%;
    bottom: -10%;
    left: -0.3rem;
    background-color: ${({ theme }) => theme.colors.highlight};
    transition: height 0.8s ease-in-out;
  }

  &:hover:after {
    height: 110%;
  }

  :active {
    box-shadow: 0 0.15rem ${({ theme }) => theme.colors.highlightDark};
    transform: translateY(0.15rem);
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    `
      background-color: ${theme.colors.highlight};
      color: ${theme.colors.primary};
      box-shadow: 0 0.15rem ${theme.colors.highlightDark};
      transform: translateY(0.15rem);
    `};
`

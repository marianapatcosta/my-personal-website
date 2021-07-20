import styled from 'styled-components'

export const StyledCheckbox = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;

  ${({ disabled, theme }) => disabled && `color: ${theme.colors.disabled};`}
`

export const StyledCheckboxToggleTick = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin: auto;
  filter: ${({ theme }) => theme.colors.icon};
`

export const StyledCheckboxToggle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 1rem;
  height: 1rem;
  margin: 0.125rem;
  margin-right: 0.5rem;
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    opacity: 0.75;
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
      background-color: ${theme.colors.disabled};
      opacity: 0.3;
      pointer-events: none;
      user-select: none;
      cursor: default;
    `}
`

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  :checked + ${StyledCheckboxToggle} {
    background-color: ${({ theme }) => theme.colors.highlight};
  }

  :focus-visible + ${StyledCheckboxToggle} {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight};
  }

  :focus:not(:focus-visible) + ${StyledCheckboxToggle} {
    outline: none;
  }
`

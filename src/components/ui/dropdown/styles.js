import styled from 'styled-components'

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const StyledDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.625rem;
  cursor: pointer;
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.highlight};
  color: ${({ theme }) => theme.colors.primary};
  ${({ disabled }) =>
    !!disabled &&
    `  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  cursor: default;`}
`

export const StyledDropdownArrow = styled.img`
  width: 0.8rem;
  filter: ${({ theme }) => theme.colors.iconFont};
  transition: transform 0.5s ease-in-out;

  ${({ isExpanded }) =>
    isExpanded &&
    `transform: rotate(180deg);
  transition: transform 0.5s linear;`}
`

export const StyledDropdownOptions = styled.ul`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${({ theme }) => theme.colors.shadow};
  border-top: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0 0.3rem;
  width: 100%;
  list-style: none;
  height: 0;
  max-height: 12.5rem;
  overflow: scroll;
  transform-origin: top center;
  position: absolute;
  z-index: 1;
  top: 2.8rem;
  font-size: 95%;
  transition: all 0.5s ease-in-out;

  ${({ isExpanded }) => isExpanded && `height: 12.5rem; padding: 0.3rem;`}
`

export const StyledDropdownOption = styled.li`
  padding: 0.3rem;
  cursor: pointer;
`

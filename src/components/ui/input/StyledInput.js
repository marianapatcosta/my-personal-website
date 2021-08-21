import styled from 'styled-components'

export const StyledInputField = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.063rem solid ${({ theme }) => theme.colors.highlight};
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  height: 3rem;
  font: inherit;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${({ theme }) => theme.colors.primary} inset !important;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.font};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.font};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.font};
  }

  ${({ errorText, theme }) =>
    `border-color: ${errorText ? theme.colors.red : ''};
    `}
`
export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 0.3rem;
`

export const StyledInputIcon = styled.img`
  position: absolute;
  height: 1.1rem;
  width: 1.1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 0.625rem;
  filter: ${({ theme }) => theme.colors.iconHighlight};
`

export const StyledInputError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 95%;
  margin-top: 0.3rem;
`

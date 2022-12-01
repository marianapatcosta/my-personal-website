import styled from 'styled-components'

export const StyledTextareaWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  width: 100%;
`

export const StyledTextarea = styled.textarea`
  display: block;
  color: ${({ theme }) => theme.colors.font};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.063rem solid ${({ theme }) => theme.colors.highlight};
  border-radius: 0.375rem;
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  position: relative;
  min-width: 100%;
  max-width: 100%;
  min-height: 13rem;
  max-height: 26rem;
  font: inherit;

  :focus {
    outline: 0.125rem solid ${({ theme }) => theme.colors.highlight};
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

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${({ theme }) => theme.colors.primary} inset !important;
  }

  ${({ errorText, theme }) =>
    `border-color: ${errorText ? theme.colors.red : ''};
    `}
`

export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
`

export const StyledTextareaError = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 95%;
  margin-top: 0.3rem;
`

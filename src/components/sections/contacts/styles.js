import styled from 'styled-components'
import { Button } from '../..'
import Link from '../../ui/link'
import { StyledSection } from '../../../themes/global-style'

export const StyledContacts = styled(StyledSection)`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};
`

export const StyledContactsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    column-gap: 3rem;

    // for safari below 14.1 that not supports gap with flexbox
    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        margin: -1.5em;
        & > * {
          margin: 1.5em;
        }
      }
    }
  }
`

export const StyledForm = styled.form`
  width: 100%;
  max-width: 50rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }
`

export const StyledTitle = styled.h3`
  display: block;
  font-size: 140%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 400;
  margin-bottom: 1.5rem;
`

export const StyledFormItem = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`

export const StyledFormItems = styled.div`
  display: flex;

  & ${StyledFormItem} {
    margin-left: 0.5rem;

    &:first-child {
      margin-left: 0;
      margin-right: 0.5rem;
    }
  }
`

export const StyledButton = styled(Button)`
  margin: 1rem 0 0 auto;
  font-size: 110%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 2rem;
  }
`

export const StyledContactLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: space-evenly;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
    margin-top: 3rem;
  }
`

export const StyledContactLinksDesktop = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

export const StyledContactLink = styled(Link)`
  width: 5.5rem;
  margin-right: 0.5rem;
  height: 1.8rem;
  justify-content: revert;

  &:last-child {
    margin-right: 0;
  }


  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-right: 0;
  }
`

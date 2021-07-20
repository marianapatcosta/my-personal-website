import styled from 'styled-components'
import { StyledSection } from '../../../themes/global-style'
import Tag from '../../ui/tag'
import Tooltip from '../../ui/tooltip'

export const StyledPortfolio = styled(StyledSection)`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};
`

export const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  // for safari below 14.1 that not supports gap with flexbox
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      margin: -1.5em;
      & > * {
        margin: 1.5em;
      }
    }
  }
`

export const StyledItem = styled.div`
  width: 20rem;
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.375rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 27rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 22rem;
    min-height: 30rem;
    padding: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25rem;
    min-height: 32rem;
  }
`

export const StyledItemTitle = styled.h3`
  font-size: 140%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const StyledItemDescription = styled.p`
  line-height: 1.3rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 1.5rem;
  }
`

export const StyledTooltip = styled(Tooltip)`
  visibility: hidden;
  opacity: 0;
`

export const StyledStack = styled.p`
  display: flex;
  margin-top: 0.5rem;
  justify-content: center;
  column-gap: 0.3rem;

  img {
    height: 1.4rem;
    filter: ${({ theme }) => theme.colors.icon};
    user-select: none;
  }

  & > span {
    position: relative;
    display: flex;
    align-content: center;

    :hover ${StyledTooltip} {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  // for safari below 14.1 that not supports gap with flexbox
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      margin: 0.5rem -0.15em;
      & > * {
        margin: 0.5rem 0.15em;
      }
    }
  }
`

export const StyledLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
`

export const StyledDropdownWrapper = styled.div`
  margin-bottom: 2.5rem;

  & > div {
    margin: 0 auto;
    width: 13rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const StyledTags = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.3rem;
    flex-wrap: wrap;
    margin: 0 auto 2rem;
    max-width: 62.5rem;
  }

  // for safari below 14.1 that not supports gap with flexbox
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      margin: 0.5rem -0.15em 2rem;
      & > * {
        margin: 0 0.15em;
      }
    }
  }
`

export const StyledTag = styled(Tag)`
  margin-bottom: 1rem;
`

export const StyledNoItems = styled.p`
  font-size: 110%;
  font-style: italic;
  margin: 3rem 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 4rem 0;
  }
`

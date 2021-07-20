import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { StyledSection } from '../../../themes/global-style'
import Button from '../../ui/button'

export const StyledAbout = styled(StyledSection)`
  box-shadow: inset 0 -0.5rem 0.7rem -0.5rem
    ${({ theme }) => theme.colors.sectionShadow};
`

export const StyledSectionMain = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: revert;
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

export const StyledAboutMe = styled.div`
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
  }
`

export const StyledSkills = styled.div`
  flex: 1;
`

export const StyledAboutText = styled.p`
  text-align: justify;
`

export const StyledAboutPhoto = styled(GatsbyImage)`
  flex: 0.5;
  margin: 0.5rem 1.5rem;
  width: 10rem;
  border-radius: 0.625rem;
  box-shadow: 0 0.1rem 0.4rem 0.3rem rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  float: right;
  shape-outside: circle(50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 12rem;
  }
`

export const StyledInterests = styled.div`
  margin-bottom: 1.5rem;
`

export const StyledInterestsTitle = styled.div`
  display: flex;
  align-content: center;

  h3 {
    font-size: 140%;
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  img {
    height: 1.6rem;
    margin-right: 0.5rem;
    filter: ${({ theme }) => theme.colors.iconHighlight};
    user-select: none;
  }
`

export const StyledInterestsContent = styled.p`
  display: flex;
  flex-wrap: wrap;

  img {
    height: 1.4rem;
    margin-right: 0.3rem;
    filter: ${({ theme }) => theme.colors.icon};
    user-select: none;
  }

  & > span {
    display: flex;
    align-content: center;
    padding: 0 0.75rem 0 0;
    border-right: 0.1rem solid ${({ theme }) => theme.colors.highlight};
    margin: 0.5rem 0.75rem 0.5rem 0;

    span {
      line-height: 1.4rem;
      white-space: nowrap;
    }
  }
`

export const StyledButton = styled(Button)`
  margin-left: auto;
  font-size: 110%;
`

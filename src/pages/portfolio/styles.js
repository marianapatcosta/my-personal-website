import styled from 'styled-components'
import Tag from '../../components/ui/tag'
import { StyledSectionTitle } from '../../themes/global-style'

export const StyledPortfolio = styled.div`
  margin: 3rem 0;
  min-height: calc(100vh - 14rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 4rem 0;
    min-height: calc(100vh - 17rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 5rem 0;
    min-height: calc(100vh - 19rem);
  }
`

export const StyledPortfolioTitle = styled(StyledSectionTitle)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`

export const StyledItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(21rem, max-content));
  gap: 1.5rem;
  justify-content: center;
  justify-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(24rem, max-content));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(27rem, max-content));
  }
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

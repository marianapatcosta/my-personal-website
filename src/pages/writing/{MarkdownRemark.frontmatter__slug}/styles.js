import styled from 'styled-components'
import { StyledSectionTitle } from '../../../themes/global-style'

export const StyledArticle = styled.article`
  min-height: calc(100vh - 14rem);
  padding: 3rem 1rem;
  max-width: 45rem;
  margin: 0 auto 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: calc(100vh - 17rem);
    padding: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 8rem;
  }
`

export const StyledHeader = styled.header`
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 2rem;
  }
`

export const StyledArticleTitle = styled(StyledSectionTitle)`
  text-align: start;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }
`

export const StyledInfo = styled.div`
  margin-bottom: 0.5rem;
  font-size: 95%;
  opacity: 0.75;
`

export const StyledTags = styled.p`
  margin: 1rem 0 0.5rem;
  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.2rem 0.5rem;
    font-size: 90%;
    margin: 0 0.3rem;
    border-radius: 0.3rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0 0.5rem;
  }
`

export const StyledH2 = styled.h2`
  margin: 1rem 0 0.3rem;
`

export const StyledH3 = styled.h3`
  margin: 1rem 0 0.3rem;
`

export const StyledH4 = styled.h4`
  margin: 1rem 0 0.3rem;
`

export const StyledH5 = styled.h5`
  margin: 1rem 0 0.3rem;
`

export const StyledUnorderedList = styled.ul`
  list-style: none;
`

export const StyledListItem = styled.li`
  list-style-type: '∗';
  padding-inline-start: 0.3rem;
  margin-left: 0.5rem;

  ::marker {
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: bold;
  }
`

export const StyledLink = styled.a`
  text-align: end;
  color: ${({ theme }) => theme.colors.highlight};
  user-select: none;

  &:visited {
    opacity: 0.75;
  }
`

export const StyledFigCaption = styled.figcaption`
  opacity: 0.75;
  font-size: 95%;
  margin: 0 0 1rem 1rem;
`

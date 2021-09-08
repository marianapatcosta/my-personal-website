import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

export const StyledItem = styled.div`
  width: 20rem;
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.375rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 22rem;
    min-height: 20rem;
    padding: 1.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 25rem;
    min-height: 22rem;
  }
`

export const StyledItemTitle = styled.h3`
  font-size: 140%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 400;
  line-height: 1.8rem;
`

export const StyledInfo = styled.div`
  margin-bottom: 0.5rem;
  font-size: 90%;
  opacity: 0.75;
`

export const StyledItemSummary = styled.p`
  line-height: 1.3rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 1.5rem;
  }
`

export const StyledImage = styled(GatsbyImage)`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`

export const StyledTags = styled.p`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 0.2rem 0.5rem;
    font-size: 90%;
    margin: 0 0.3rem 0.6rem 0;
    border-radius: 0.3rem;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const StyledReadMore = styled(Link)`
  text-align: end;
  color: ${({ theme }) => theme.colors.highlight};
  user-select: none;

  &:visited {
    opacity: 0.75;
  }
`

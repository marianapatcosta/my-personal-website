import styled from 'styled-components'
import Tooltip from '../tooltip'

export const StyledItem = styled.div`
  width: 18rem;
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.375rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 27rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 30rem;
    padding: 1.5rem;
  }
`

export const StyledItemTitle = styled.h3`
  font-size: 140%;
  color: ${({ theme }) => theme.colors.highlight};
  font-weight: 400;
  margin-bottom: 0.5rem;
`

export const StyledItemDescription = styled.p`
  line-height: 1.15rem;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    line-height: 1.3rem;
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
    height: 1.2rem;
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

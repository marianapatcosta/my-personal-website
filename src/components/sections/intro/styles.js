import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'
import Particles from 'react-particles-js'
import { StyledSection } from '../../../themes/global-style'

const BLINKING_ANIMATION_DURATION = 0.3
const TYPING_ANIMATION_DURATION_PER_CHARACTER = 0.15

const getBlinkingIterationCount = stringLength =>
  !!stringLength
    ? (TYPING_ANIMATION_DURATION_PER_CHARACTER * stringLength) /
        BLINKING_ANIMATION_DURATION -
      1
    : 'infinite'

const getTypingDelay = delay =>
  !!delay ? `${TYPING_ANIMATION_DURATION_PER_CHARACTER * delay + 1}s` : '5s'

const blinking = ({ theme }) => keyframes`
  50% { border-color: ${theme.colors.font} };
`

const waving = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

export const StyledIntro = styled(StyledSection)`
  position: relative;
  min-height: -webkit-fill-available;
  height: calc(100vh - 7rem);
  background-color: ${({ theme }) => theme.colors.highlight};
  box-shadow: inset 0 -1rem 0.7rem -1rem
    ${({ theme }) => theme.colors.highlightDark};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: calc(100vh - 9rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: calc(100vh - 15rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: calc(100vh - 19rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: calc(100vh - 20rem);
  }
`

export const StyledIntroContentWrapper = styled.div`
  height: calc(100% - 6.5rem);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: calc(100% - 4rem);
    margin-bottom: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: calc(100% - 9rem);
    margin-bottom: 8rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: calc(100% - 7rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: calc(100% - 5rem);
  }
`

export const StyledIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: revert;
    justify-content: space-between;
    height: auto;
  }
`

export const StyledText = styled.div`
  margin: 0 auto;
  width: 20rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 1rem;
    width: auto;
    margin: revert;
  }
`

export const StyledHello = styled.span`
  display: flex;
  font-size: 140%;
  margin-bottom: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 180%;
    margin-bottom: 3rem;
  }
`

export const StyledHand = styled.span`
  animation: ${waving} 2s infinite;
  transform-origin: 70% 70%;
  margin-left: 0.5rem;
`

export const StyledTitle = styled.h2`
  width: fit-content;
  text-transform: uppercase;
  font-size: 180%;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.125rem solid ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.font};
  line-height: 2rem;
  letter-spacing: 0.05rem;
  animation: ${blinking} 0.75s 0.005s step-end
    ${({ stringLength }) => getBlinkingIterationCount(stringLength)};
  margin-bottom: 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 200%;
    margin-bottom: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 250%;
    line-height: 3rem;
  }
`

export const StyledSubtitle = styled(StyledTitle)`
  font-size: 140%;
  animation: ${blinking} 0.75s ${({ delay }) => getTypingDelay(delay)} step-end
    ${({ stringLength }) => getBlinkingIterationCount(stringLength)};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 180%;
  }
`

export const StyledPhotoWrapper = styled.div`
  height: 15rem;
  align-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 16.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 18.5rem;
    margin-top: revert;
    margin-left: auto;
    align-self: revert;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 20rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 22rem;
  }
`

export const StyledPhoto = styled(GatsbyImage)`
  height: 100%;
`

export const StyledLinks = styled.div``

export const StyledLink = styled.a`
  margin: 0 0.5rem;
  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      width: 1.25rem;
    }
  }
`

export const StyledShare = styled.button`
  border: none;
  background: none;
  margin: 0 0.5rem;
  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 1rem;
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      width: 1.25rem;
    }
  }
`

export const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: -5rem;
  width: 100%;
  height: calc(100% + 5rem);
`

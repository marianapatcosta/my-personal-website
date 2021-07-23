import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'
import Particles from 'react-particles-js'

import { StyledSection } from '../../../themes/global-style'

const BLINKING_ANIMATION_DURATION = 0.3
const TYPING_ANIMATION_DURATION_PER_CHARACTER = 0.15

const getTypingDuration = stringLength =>
  !!stringLength
    ? `${TYPING_ANIMATION_DURATION_PER_CHARACTER * stringLength}s`
    : '5s'

const getBlinkingIterationCount = stringLength =>
  !!stringLength
    ? (TYPING_ANIMATION_DURATION_PER_CHARACTER * stringLength) /
        BLINKING_ANIMATION_DURATION -
      1
    : 'infinite'

const getTypingDelay = delay =>
  !!delay ? `${TYPING_ANIMATION_DURATION_PER_CHARACTER * delay + 1}s` : '5s'

const typing = keyframes`
  from { width: 0;  }
  1% { opacity: 1; }
  to { width: 100%; opacity: 1; }
`

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
  height: calc(100vh - 9rem);
  background-color: ${({ theme }) => theme.colors.highlight};
  box-shadow: inset 0 -1rem 0.7rem -1rem
    ${({ theme }) => theme.colors.highlightDark};

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: calc(100vh - 15rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: calc(100vh - 10rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: calc(100vh - 15rem);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: calc(100vh - 20rem);
  }
`

export const StyledIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  padding-top: 3rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: revert;
    justify-content: space-between;
    align-items: center;
    padding-top: 5rem;
  }
`

export const StyledText = styled.div`
  min-width: 30rem;
`

export const StyledHello = styled.span`
  display: flex;
  font-size: 180%;
  margin-bottom: 2rem;
  height: 3rem;
`

export const StyledHand = styled.span`
  animation: ${waving} 2s infinite;
  transform-origin: 70% 70%;
  margin-left: 0.5rem;
`

export const StyledTitle = styled.h2`
  text-transform: uppercase;
  font-size: 250%;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.125rem solid ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.font};
  margin: 0 auto 1.5rem;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  text-align: right;
  animation: /* ${typing} ${({ stringLength }) =>
    getTypingDuration(stringLength)}
      steps(
        ${({ stringLength }) => (!!stringLength ? stringLength - 1 : 15)},
        end
      )
      forwards, */ ${blinking} 0.75s 0.005s step-end
    ${({ stringLength }) => getBlinkingIterationCount(stringLength)};
`

export const StyledSubtitle = styled(StyledTitle)`
  font-size: 180%;
  animation: /* ${typing} ${({ stringLength }) =>
    getTypingDuration(stringLength)}
      ${({ delay }) => getTypingDelay(delay)}
      steps(
        ${({ stringLength }) => (!!stringLength ? stringLength - 1 : 15)},
        end
      )
      forwards, */ ${blinking} 0.75s ${({ delay }) => getTypingDelay(delay)}
    step-end ${({ stringLength }) => getBlinkingIterationCount(stringLength)};
`

export const StyledPhotoWrapper = styled.div`
  width: 17.6rem;
  height: 18.75rem;
  margin-top: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 17.6rem;
    height: 18.75rem;
    margin-top: revert;
  }
`

export const StyledPhoto = styled(GatsbyImage)`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`

export const StyledLinks = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 5rem;
    left: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    left: 7rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    left: 8rem;
  }
`

export const StyledLink = styled.a`
  margin: 0 0.5rem;
  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 1.25rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      width: 1.5rem;
    }
  }
`

export const StyledShare = styled.button`
  border: none;
  background: none;
  margin: 0 0.5rem;
  img {
    filter: ${({ theme }) => theme.colors.icon};
    width: 1.25rem;
  }

  :hover {
    cursor: pointer;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      width: 1.5rem;
    }
  }
`

export const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: -5rem;
  width: 100%;
  height: 100%;
`

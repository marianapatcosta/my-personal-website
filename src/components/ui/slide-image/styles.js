import styled, { css, keyframes } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const scaleUp = keyframes`
  0% {
    width: 50vw;
    height: revert;
  }
  100% {
    width: 90vw;
    height: auto;
  }
`

const scaleDown = keyframes`
   0% {
    width: 90vw;
    height: auto;
  }
  100% {
    width: 100%;
  }
`

export const StyledImage = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  display: block;
  transition: all 0.8s ease-in-out;
  position: absolute;
  transform: translate(-25rem, 0);
  box-shadow: 0 0.025rem 0.3rem -0.15rem ${({ theme }) => theme.colors.shadow};
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    transform: translate(0, 0);
    opacity: 1;
    visibility: visible;
    transition: all 0.8s ease-in-out;

    ;`};

  ${({ $isZoomedIn }) =>
    $isZoomedIn
      ? css`
          animation: ${scaleUp} 1s forwards;
          -webkit-animation: ${scaleUp} 1s forwards;
          cursor: zoom-out;
          box-shadow: revert;
        `
      : `
          cursor: zoom-in;
        `};

  ${({ $wasImageClicked, $isZoomedIn }) =>
    $wasImageClicked &&
    !$isZoomedIn &&
    css`
      animation: ${scaleDown} 0.3s forwards;
      -webkit-animation: ${scaleDown} 0.3s forwards;
    `}
`

export const StyledImageOverlay = styled.div`
  ${({ $isZoomedIn }) =>
    $isZoomedIn &&
    `
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    `}
`

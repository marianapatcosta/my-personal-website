import styled from 'styled-components'

const zoomInDuration = 0.3

export const StyledTalkToMe = styled.div`
  position: fixed;
  top: calc(100% - 5rem);
  left: calc(100% - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  z-index: 10;
  transition: all ${zoomInDuration}s ease-in-out;

  > button {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => `0 0.125rem 0.5rem ${theme.colors.shadow}`};
    border: 1px solid Transparent;
    border-radius: 0.5rem;
    padding: 0;
    min-height: 4rem;
    width: 4rem;
    max-height: 90vh;
    transition: padding ${zoomInDuration}s ease-in-out,
      width ${zoomInDuration}s ease-in-out,
      min-height ${zoomInDuration}s ease-in-out;

    & > div {
      background-color: transparent;
    }
  }

  svg {
    width: 4rem;
    height: 4rem;
    transition: width ${zoomInDuration}s ease-in-out,
      height ${zoomInDuration}s ease-in-out;
  }

  header {
    display: flex;
    width: 100%;
    height: 0;
    justify-content: space-between;
    visibility: hidden;
    opacity: 0;

    p {
      color: ${({ theme }) => theme.colors.font};
      font-size: 1.05rem;
    }

    button {
      margin-left: 0.15rem;
      width: 0.7rem;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: rotate(90deg);
      }
      span {
        color: ${({ theme }) => theme.colors.font};
      }
    }
  }

  ${({ interactive, theme }) =>
    interactive
      ? `
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      cursor: default;

      > div {
        padding: 0 1rem 0.5rem;
        min-height: 26rem;
        width: 20rem;
        height: max-content;

        & > div {
          border-radius: 0%;
          background-color: ${theme.colors.primary};
        }
      }

      header {
        height: 2rem;
        opacity: 1;
        padding-top: 0.5rem;
        visibility: visible;
        transition: height ${zoomInDuration}s ease-in-out, opacity 0s ease-in-out,
        padding-top ${zoomInDuration}s ease-in-out, visibility 0s ease-in-out;
      }

      svg {
        width: 18rem;
        height: 18rem;
      }
    `
      : `
      header {
        height: 0;
        opacity: 0;
        visibility: hidden;
        padding-top: 0;
        transition: height 0.1s ease-in-out, opacity 0.1s ease-in-out calc(${zoomInDuration}s - 0.1s),
        padding-top 0.1s ease-in-out, visibility 0.1s ease-in-out calc(${zoomInDuration}s - 0.1s);
      }
    `}
`

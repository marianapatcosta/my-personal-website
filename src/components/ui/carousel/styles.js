import styled from 'styled-components'

export const StyledCarousel = styled.div``

export const StyledCarouselHeader = styled.h2`
  margin: 0.625rem 0;
  font-size: 120%;
  color: ${({ theme }) => theme.colors.font};
`
export const StyledChevron = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 0.8rem;
  height: 0.9rem;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  filter: ${({ theme }) => theme.colors.iconHighlight};
  cursor: pointer;

  ${({ isLeftChevron }) =>
    isLeftChevron
      ? `left: 0.125rem;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(0deg);`
      : `right: 0.125rem;`};

  :hover {
    ${({ isLeftChevron }) =>
      isLeftChevron
        ? `left: 0.125rem;
          transform: rotate(180deg) scale(1.3);`
        : `transform: scale(1.3)`};
  }

  ${({ isAutomaticView }) =>
    isAutomaticView &&
    ` visibility: hidden;
    opacity: 0;
      `};
`

export const StyledCarouselContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 12.4rem;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.125rem 0.5rem ${({ theme }) => theme.colors.shadow};
  border: 0.3rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;

  ${({ isVertical }) => isVertical && `width: 20rem; height: 25rem`};
`

export const StyledIndicatorBar = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const StyledIndicatorBarItem = styled.span`
  border: 0.0625rem solid ${({ theme }) => theme.colors.font};
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  margin: 0 0.2rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${({ isFilled, theme }) =>
    isFilled &&
    `
      background-color: ${theme.colors.font};
      transition: background-color 0.01s ease-in-out 0.4s;`};

  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 2rem;
    top: -1rem;
    left: -1rem;
    background-color: ${({ theme }) => theme.colors.font};

    ${({ isFilled }) =>
      isFilled &&
      `
        width: 2rem;
        transition: width 0.5s ease-in-out;`};
  }
`

export const StyledButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: 0.5rem;
  z-index: 1;
  cursor: pointer;

  div {
    box-sizing: content-box;
    border: 0.0625rem solid ${({ theme, isAutomaticView }) =>
      isAutomaticView ? theme.colors.green : theme.colors.highlight};;
    background-color: ${({ theme, isAutomaticView }) =>
      isAutomaticView ? theme.colors.green : theme.colors.highlight};
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    transition: all 0.8s ease-in-out, transform 0.8s ease-in-out 0s;
  }
`

export const StyledImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 90%;
  margin: auto;
`

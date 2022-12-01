import styled from 'styled-components'

export const StyledTooltip = styled.span`
  font-size: 80%;
  position: absolute;
  line-height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.5rem;
  box-shadow: 0.0625rem 0.0625rem 0.225rem ${({ theme }) => theme.colors.shadow};
  bottom: -2rem;
  left: 50%;
  z-index: 1;
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  width: fit-content;
  height: fit-content;
  white-space: nowrap;
  transform: translateX(-50%) translateY(-1.9rem);
  transition: all 0.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    top: -0.9rem;
    left: 50%;
    border: 0.5rem solid ${({ theme }) => theme.colors.transparent};
    border-top: 0.5rem solid ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%) rotate(180deg);
  }

  &::before {
    content: '';
    position: absolute;
    transform: rotate(225deg);
    width: 0.6rem;
    height: 0.6rem;
    top: -0.2rem;
    left: 0;
    margin: 0 auto;
    right: 0;
    z-index: -1;
    box-shadow: 0.0525rem 0.0525rem 0.0625rem 0.001rem
      ${({ theme }) => theme.colors.tooltipShadow};
  }
`

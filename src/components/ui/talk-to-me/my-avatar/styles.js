import styled, { css, keyframes } from 'styled-components'

const blinkAnimationDuration = 8
const winkAnimationDuration = 0.2
const liftEyebrowAnimationDuration = 2
const poutingAnimationDuration = 1.5
const rollingLiftEyesAnimationDuration = 1
const moveBodyAnimationDuration = 5
const talkSmileDuration = 0.7

const transform = (
  transX,
  transY,
  scaleX = 1,
  scaleY = 1,
  rotate = 0,
  origin = 'center'
) => css`
  transform: translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})
    rotate(${rotate}deg);
  -webkit-transform: translate(${transX}px, ${transY}px)
    scale(${scaleX}, ${scaleY}) rotate(${rotate}deg);
  -moz-transform: translate(${transX}px, ${transY}px)
    scale(${scaleX}, ${scaleY}) rotate(${rotate}deg);
  -ms-transform: translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})
    rotate(${rotate}deg);
  -o-transform: translate(${transX}px, ${transY}px) scale(${scaleX}, ${scaleY})
    rotate(${rotate}deg);
  transform-origin: ${origin};
`

const animate = (
  name,
  duration,
  timingFunction = 'linear',
  delay = 0,
  iterationCount = 1,
  direction = 'normal',
  fillMode = 'none'
) => css`
  animation: ${name} ${duration}s ${timingFunction} ${delay}s ${iterationCount}
    ${direction} ${fillMode};
  -webkit-animation: ${name} ${duration}s ${timingFunction} ${delay}s
    ${iterationCount} ${direction} ${fillMode};
  transform-origin: center;
`

const lipsTalkSmile = (
  animation,
  className,
  iterationCount = 'infinite',
  fillMode = 'none'
) => {
  return css`
    .${className} {
      ${animate(
        animation,
        talkSmileDuration,
        'ease-in-out',
        0,
        iterationCount,
        'normal',
        fillMode
      )};
    }
  `
}

const lipsPout = (animation, className, iterationCount = 'infinite') => {
  /*  let styles = ''
  const animation = css(animations[index])
  for (let index = 0; index < animations.length; index += 1) {
    styles += `.${classPrefix}-${index + 1} {
      ${animate(
        animation,
        poutingAnimationDuration,
        'ease-in-out',
        0,
        iterationCount
      )};
    }`
  }

  return css`
    ${styles}
  ` */

  return css`
    .${className} {
      ${animate(
        animation,
        poutingAnimationDuration,
        'ease-in-out',
        0,
        iterationCount
      )};
    }
  `
}

const teethMoving = (iterationCount = 'infinite', fillMode = 'none') => css`
  ${animate(
    showingTeeth,
    talkSmileDuration,
    'ease-in-out',
    0,
    iterationCount,
    'normal',
    fillMode
  )};
`

const blinking = (
  animationName,
  animationDuration,
  iterationCount = 'infinite'
) => css`
  ${animate(animationName, animationDuration, 'linear', 0, iterationCount)};
`

const blinkWink = (
  classSuffix,
  animationDuration,
  iterationCount = 'infinite',
  irisAnimation,
  detailsAnimation,
  shadowAnimation
) => css`
  .eye-back-iris${classSuffix} {
    ${blinking(irisAnimation, animationDuration, iterationCount)};
  }

  .eye-front${classSuffix}, .eye-details${classSuffix} {
    ${blinking(detailsAnimation, animationDuration, iterationCount)};
  }

  .eye-shadow${classSuffix} {
    ${blinking(shadowAnimation, animationDuration, iterationCount)};
  }
`

const rollingEyes = keyframes`
  20% {
   ${transform(-2, -3)};
  }
  40% {
    ${transform(-1, -7)};
  }
  60% {
    ${transform(0, -7)};
  }
  80% {
    ${transform(2, -3)};
  }
`

const lookingUp = keyframes`
  5% {
    ${transform(3, -4)};
  }
  45% {
    ${transform(3, -4)};
  }
  50% {
    ${transform(-3, -4.5)};
  }
  100% {
    ${transform(-3, -4.5)};
  }
`

const hideEyeBackAndIris = keyframes`
  98% {
    ${transform(0, 0, 1, 1)};
  }
  100% {
    ${transform(0, -11, 1, 0)};
  }
`

const squeeze = keyframes`
  98% {
    ${transform(0, 0, 1, 1)};
  }
  100% {
    ${transform(0, -8, 1, 0.25)};
  }
`

const lighter = keyframes`
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`

const hideEyeBackAndIrisWink = keyframes`
  100% {
    ${transform(0, -11, 1, 0)};
  }
`

const squeezeWink = keyframes`
  100% {
    ${transform(0, -8, 1, 0.25)};
  }
`

const lighterWink = keyframes`
  100% {
    opacity: 0.1;
  }
`

const liftRightEyebrow = keyframes`
  5%,
  95% {
    ${transform(0, 0, 1, 1, -5)};
  }
`

const liftLeftEyebrow = keyframes`
  5%,
  95% {
    ${transform(0, 0, 1, 1, 5)};
  }
`

const moveBody = keyframes`
  20% {
    ${transform(0, 1, 1, 1)};
  }
  80% {
    ${transform(0, -1, 1, 1)};
  }
`

const talkingLips1 = keyframes`
  100% {
    d: path(
      'M99.867 141.087c-4.159 0-7.258-4.297-7.258-4.297 7.261 3.32 14.915 0 14.915 0S103.516 141.087 99.867 141.087z'
    );
  }
`

const talkingLips2 = keyframes`
  100% {
    d: path(
      'M95.441 127.853c0.99-0.131 2.728 0.908 4.824 0.909 1.541 0.002 3.426-1.067 4.612-0.909 2.529 0.341 3.857 1.882 10.491 2.47 0 0-3.22 1.083-4.075 1.15 -2.72 0.216-7.215-0.169-11.287-0.181 -4.556-0.02-8.941 0.43-11.697 0.301 -0.994-0.051-3.941-1.137-3.941-1.137C89.901 130.196 92.547 128.235 95.441 127.853zM84.369 130.818c0 0 4.514 3.538 6.253 4.76 2.007 1.411 5.029 3.623 9.474 3.557 3.563-0.058 6.641-1.816 8.477-2.986 1.978-1.259 6.796-5.463 6.796-5.463 -2.77 0.633-2.77 0.633-4.075 1.149 -2.741 1.084-7.477 2.722-11.173 2.722 -4.563 0-8.936-1.639-11.811-2.603C86.315 131.286 84.369 130.818 84.369 130.818z'
    );
    fill: $eb78a8;
    stroke: $dc5a90;
  }
`

const talkingLips3 = keyframes`
  100% {
    d: path(
      'M115.592 130.572c-0.458 0.663-2.14 0.715-2.888 0.977 -1.098 0.383-2.162 0.856-3.259 1.245 -2.693 0.954-5.51 1.792-8.375 1.98 -5.336 0.351-10.599-1.808-15.596-3.41 -0.424-0.136-0.994-0.175-1.359-0.449 -0.326-0.244-0.015-0.768 0.336-0.701 1.051 0.199 2.092 0.731 3.141 0.994 1.224 0.308 2.583 0.16 3.832 0.113 1.592-0.059 3.184-0.146 4.777-0.207 2.927-0.109 5.842-0.053 8.768 0.059 2.621 0.101 5.366 0.402 7.915-0.332 0.688-0.199 1.379-0.399 2.047-0.656C115.179 130.09 115.94 130.07 115.592 130.572 115.415 130.828 115.632 130.515 115.592 130.572zM108.39 131.773c-3.415 0.013-6.822-0.286-10.24-0.217 -1.874 0.038-3.745 0.139-5.617 0.219 -0.566 0.024-1.625-0.143-2.11 0.204 -0.466 0.334 1.182 0.807 1.325 0.852 3.306 1.039 6.829 1.78 10.304 1.346 1.704-0.214 3.382-0.632 5.023-1.13 0.64-0.195 1.439-0.341 1.987-0.743C109.635 131.883 108.656 131.773 108.39 131.773 107.333 131.777 109.492 131.771 108.39 131.773z'
    );
    fill: $bd2866;
  }
`

const talkingLips4 = keyframes`
  100% {
    d: path(
      'M99.901 138.136c-4.165 0-7.465-2.404-10.634-4.801 7.714 2.61 14.222 2.572 21.819-0.346C107.874 135.609 104.215 138.095 99.901 138.136zM93.601 130.478c5.567-0.262 11.102 0.228 16.657 0.047 -1.847-0.453-3.623-1.426-5.512-1.681 -1.452-0.142-2.984 0.918-4.481 0.918 -1.633-0.001-3.113-0.918-4.692-0.918 -2.024 0.27-3.923 1.229-5.881 1.771C90.996 130.593 92.299 130.547 93.601 130.478 95.469 130.39 92.18 130.543 93.601 130.478z'
    );
    fill: $fa99c2;
  }
`

const talkingLips5 = keyframes`
  100% {
    d: path(
      'M95.134 136.031c1.596 0.319 3.265 0.525 4.987 0.525 1.453 0 3.029-0.222 4.598-0.563 -1.384 0.624-2.973 1.132-4.654 1.141C98.283 137.145 96.471 136.67 95.134 136.031z'
    );
    fill: $ffb5d4;
  }
`

const poutingLips1 = keyframes`
  5%,
  100% {
    d: path(
      'M100.002 141.248c-4.158 0-5.133-3.404-5.133-3.404 5.5 2.12 10.267-0.146 10.267-0.146S103.659 141.248 100.002 141.248z'
    );
  }
`

const poutingLips2 = keyframes`
  5%,
  100% {
    d: path(
      'M86.803 131.94c2.756-0.951 6.973-2.692 9.166-2.789 1.133-0.052 2.351 0.87 3.574 1.165 0.851 0.206 3.264-1.156 4.13-1.165 2.272-0.024 7.06 1.838 9.502 2.789 0.135 0.054 0 0 0 0s-5.789 6.953-13.185 6.953C91.618 138.894 86.803 131.94 86.803 131.94S86.666 131.989 86.803 131.94z'
    );
    fill: #eb78a8;
    stroke: #dc5a90;
    ${transform(0, -2, 0.9, 1.05)};
  }
`

const poutingLips3 = keyframes`
  5%,
  100% {
    d: path(
      'M113.541 131.736c-0.048-0.164-0.482-0.367-0.653-0.359 -0.311 0.017-0.672 0.396-1.313 0.41 -0.742 0.018-4.679 0.61-5.736 0.54 -2.129-0.142-3.824 0.666-5.848 0.666 -2.025 0-3.868-0.882-5.996-0.739 -1.057 0.072-4.847-0.448-5.591-0.467 -0.643-0.015-0.892-0.411-1.166-0.464 -0.192-0.036-0.663 0.166-0.757 0.338 -0.083 0.149 0.092 0.67 0.209 0.794 0.285 0.297 1.136 0.242 1.698 0.256 0.777 0.017 4.577 0.538 5.65 0.466 2.081-0.141 3.936 0.822 5.952 0.822s3.725-0.889 5.806-0.748c1.071 0.071 5.015-0.524 5.793-0.54 0.563-0.014 1.366-0.061 1.654-0.292C113.379 132.311 113.59 131.904 113.541 131.736z'
    );
    fill: #bd2866;
    ${transform(0, 0, 0.9)};
  }
`

const poutingLips4 = keyframes`
  5%,
  100% {
    d: path(
      'M99.989 137.352c-3.37 0-6.645-1.153-9.241-3.305 1.307-0.072 2.652-0.277 3.961-0.22 1.613 0.07 3.144 0.707 4.756 0.813 1.742 0.116 3.358-0.487 5.064-0.694 1.422-0.17 3.664-0.674 5.091-0.622C107.068 135.28 103.244 137.352 99.989 137.352zM104.562 131.739c1.314-0.037 3.414-0.532 4.724-0.437 -1.405-0.759-3.657-0.941-5.243-1.247 -1.366-0.266-2.738 0.791-4.081 0.968 -1.514 0.199-2.65-1.239-4.119-1.288 -1.593 0.017-3.233 0.991-4.634 1.65 1.284-0.034 2.607-0.176 3.886-0.012 1.566 0.199 3.069 0.817 4.655 0.87C101.373 132.299 102.939 131.782 104.562 131.739z'
    );
    fill: $fa99c2;
  }
`

const poutingLips5 = keyframes`
  5%,
  100% {
    d: path(
      'M99.941 136.4c-2.029 0-4.007-0.702-5.707-2.002 0.38-0.038 0.764-0.067 1.133-0.067 0.117 0 0.234 0.004 0.351 0.011 0.609 0.032 1.209 0.207 1.846 0.393 0.618 0.178 1.256 0.363 1.923 0.42 0.132 0.01 0.264 0.015 0.395 0.015 0.819 0 1.596-0.204 2.348-0.4 0.477-0.125 0.928-0.243 1.392-0.313 0.253-0.04 0.527-0.059 0.837-0.059 0.268 0 0.544 0.015 0.818 0.036C103.862 135.485 102.03 136.4 99.941 136.4z'
    );
    fill: $ffb5d4;
  }
`

const showingTeeth = keyframes`
  100% {
    ${transform(0, 0, 1, 1)};
  }
`

export const StyledAvatar = styled.svg`
  ${blinkWink(
    '--blink',
    blinkAnimationDuration,
    'infinite',
    hideEyeBackAndIris,
    squeeze,
    lighter
  )};
  ${blinkWink(
    '--wink',
    winkAnimationDuration,
    1,
    hideEyeBackAndIrisWink,
    squeezeWink,
    lighterWink
  )};

  .eye-iris--roll {
    ${animate(rollingEyes, rollingLiftEyesAnimationDuration)};
  }

  .eye-iris--look-up {
    ${animate(lookingUp, rollingLiftEyesAnimationDuration)};
  }

  .lift-right-eyebrow {
    ${animate(liftRightEyebrow, liftEyebrowAnimationDuration)};
  }

  .lift-left-eyebrow {
    ${animate(liftLeftEyebrow, liftEyebrowAnimationDuration)};
  }

  .body-motion {
    &--breath {
      ${animate(
        moveBody,
        moveBodyAnimationDuration,
        ' ease-in-out',
        0,
        'infinite'
      )};
    }

    &--talk {
      ${animate(
        moveBody,
        moveBodyAnimationDuration / 1.5,
        'ease-in-out',
        0,
        'infinite'
      )};
    }
  }

  ${lipsTalkSmile(talkingLips1, 'lips--talk-1')};
  ${lipsTalkSmile(talkingLips2, 'lips--talk-2')};
  ${lipsTalkSmile(talkingLips3, 'lips--talk-3')};
  ${lipsTalkSmile(talkingLips4, 'lips--talk-4')};
  ${lipsTalkSmile(talkingLips5, 'lips--talk-5')};

  ${lipsTalkSmile(talkingLips1, 'lips--smile-1', 1, 'forwards')};
  ${lipsTalkSmile(talkingLips2, 'lips--smile-2', 1, 'forwards')};
  ${lipsTalkSmile(talkingLips3, 'lips--smile-3', 1, 'forwards')};
  ${lipsTalkSmile(talkingLips4, 'lips--smile-4', 1, 'forwards')};
  ${lipsTalkSmile(talkingLips5, 'lips--smile-5', 1, 'forwards')};

  ${lipsPout(poutingLips1, 'lips--pout-1', 1, 'forwards')};
  ${lipsPout(poutingLips2, 'lips--pout-2', 1, 'forwards')};
  ${lipsPout(poutingLips3, 'lips--pout-3', 1, 'forwards')};
  ${lipsPout(poutingLips4, 'lips--pout-4', 1, 'forwards')};
  ${lipsPout(poutingLips5, 'lips--pout-5', 1, 'forwards')};

  .teeth {
    ${transform(0, 16, 1, 0)};

    &--talk {
      ${teethMoving()};
    }

    &--smile {
      ${teethMoving(1, 'forwards')};
    }
  }
`

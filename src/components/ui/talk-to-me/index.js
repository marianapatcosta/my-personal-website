import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import { TalkToMe as TalkToMeComponent } from '@marianapatcosta/talk-to-me'
import { MyAvatar } from './my-avatar'
import { conversation } from './conversation'
import { TOAST_TYPES } from '../../../constants'
import { useToast } from '../../../hooks/toast'
import { getBrowserName } from '../../../utils'
import { StyledTalkToMe } from './styles'

const TalkToMe = ({ className }) => {
  const [interactive, setInteractive] = useState(false)
  const [interactiveSpeech, setInteractiveSpeech] = useState(false)
  const timerId = useRef(null)
  const supportSpeechRecognition =
    typeof window !== 'undefined'
      ? !!window.SpeechRecognition || window.webkitSpeechRecognition
      : false

  const { addToast } = useToast()

  useEffect(() => {
    const browserName = getBrowserName() || 'This browser'
    const isChromeOrSafari =
      (browserName === 'Chrome') | (browserName === 'Safari')

    if (!supportSpeechRecognition && interactive) {
      addToast({
        message: `${browserName} does't support oral communication. Use Google Chrome for better support or just text.`,
        type: TOAST_TYPES.WARNING,
      })
      return
    }

    if (!isChromeOrSafari && interactive) {
      addToast({
        message: `${browserName} has poor support for oral communication. Use Google Chrome for better support or just text.`,
        type: TOAST_TYPES.WARNING,
      })
    }
  }, [interactive])

  const SMILE = 'smile'
  const ROLL_EYES = 'rollEyes'
  const ANTIPATHY_FACE = 'antipathyFace'

  const getUnmatchedSpeechAction = () =>
    Math.random() > 0.5
      ? newStatus => ({
          type: ROLL_EYES,
          payload: { rollingEyes: newStatus },
        })
      : newStatus => ({
          type: ANTIPATHY_FACE,
          payload: { liftLeftEyebrow: newStatus, pouting: newStatus },
        })

  const avatarPropsReducer = (currentState, action) => {
    switch (action.type) {
      case SMILE:
        return { ...currentState, ...action.payload }
      case ROLL_EYES:
        return { ...currentState, ...action.payload }
      case ANTIPATHY_FACE:
        return { ...currentState, ...action.payload }
      default:
        return currentState
    }
  }

  const initialAvatarProps = {
    smiling: false,
    liftLeftEyebrow: false,
    pouting: false,
    rollingEyes: false,
  }

  const [avatarProps, dispatch] = useReducer(
    avatarPropsReducer,
    initialAvatarProps
  )

  const onUnmatchedOutput = useCallback(async () => {
    const getAction = getUnmatchedSpeechAction()
    dispatch(getAction(true))
    return new Promise(resolve => {
      setTimeout(() => resolve(dispatch(getAction(false))), 1500)
    })
  }, [])

  const smile = useCallback(() => {
    setTimeout(() => dispatch({ type: SMILE, payload: { smiling: true } }), 50)
    setTimeout(
      () => dispatch({ type: SMILE, payload: { smiling: false } }),
      2000
    )
  }, [])

  const toggleInteractive = () => {
    timerId.current = null
    clearTimeout(timerId.current)
    const updatedInteractiveStatus = !interactive
    setInteractive(updatedInteractiveStatus)
    if (!updatedInteractiveStatus) {
      setInteractiveSpeech(false)
      return
    }
    timerId.current = setTimeout(() => setInteractiveSpeech(true), 500)
  }

  return (
    <StyledTalkToMe
      className={className}
      interactive={interactive}
      onClick={interactive ? () => toggleInteractive(9) : () => null}
    >
      {!interactive && (
        <button
          role={!interactive ? 'button' : ''}
          aria-label={!interactive ? 'click to talk to me!' : ''}
          onClick={toggleInteractive}
        ></button>
      )}
      <div
        aria-modal={interactive && true}
        role={interactive ? 'dialog' : ''}
        onClick={interactive ? e => e.stopPropagation() : () => null}
        onKeyDown={interactive ? e => e.stopPropagation() : () => null}
      >
        <header>
          <p>{`${
            supportSpeechRecognition ? 'Click and talk!' : ''
          } Let's chat about my career!`}</p>
          <button
            onClick={toggleInteractive}
            aria-label={interactive ? 'click to close the modal.' : ''}
          >
            <span>✖</span>
          </button>
        </header>
        <TalkToMeComponent
          conversation={conversation}
          avatar={MyAvatar}
          onStopTalking={smile}
          avatarProps={avatarProps}
          interactive={interactiveSpeech}
          onTyping={smile}
          onUnmatchedOutput={onUnmatchedOutput}
        />
      </div>
    </StyledTalkToMe>
  )
}

TalkToMe.propTypes = {
  className: PropTypes.string,
}

TalkToMe.defaultProps = {
  className: '',
}

export default TalkToMe

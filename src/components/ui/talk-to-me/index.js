import React, { useReducer } from 'react'
import { TalkToMe as TalkToMeComponent } from '@marianapatcosta/talk-to-me'
import { MyAvatar } from './my-avatar'
import { conversation } from './conversation'
import { StyledTalkToMe } from './styles'

const TalkToMe = () => {
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

  const onUnmatchedOutput = async () => {
    const getAction = getUnmatchedSpeechAction()
    dispatch(getAction(true))
    return new Promise(resolve => {
      setTimeout(() => resolve(dispatch(getAction(false))), 1500)
    })
  }

  const smile = () => {
    setTimeout(() => dispatch({ type: SMILE, payload: { smiling: true } }), 50)
    setTimeout(
      () => dispatch({ type: SMILE, payload: { smiling: false } }),
      2000
    )
  }
  return (
    <StyledTalkToMe>
      <TalkToMeComponent
        conversation={conversation}
        avatar={MyAvatar}
        onStopTalking={smile}
        avatarProps={avatarProps}
        onTyping={smile}
        onUnmatchedOutput={onUnmatchedOutput}
      />
    </StyledTalkToMe>
  )
}

export default TalkToMe

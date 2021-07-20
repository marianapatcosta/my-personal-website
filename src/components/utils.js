import { KEYBOARD_KEY } from './constants'
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_KEY

export const isEventValid = event =>
  event.type === 'click' || event.key === SPACE_KEY || event.key === ENTER_KEY

import { KEYBOARD_KEY } from './constants'
const { SPACE_KEY, ENTER_KEY } = KEYBOARD_KEY

export const isEventValid = event =>
  event.type === 'click' || event.key === SPACE_KEY || event.key === ENTER_KEY

export const formatDate = date =>
  new Date(date).toLocaleDateString('en-UK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

export const getItemImage = (itemImage, pageImages) =>
  pageImages.find(image => itemImage === image.node.base)

export const getItemImages = (images, pageImages) =>
  pageImages
    .filter(image => images.includes(image.node.base))
    .sort((imageA, imageB) => (imageA.node.base < imageB.node.base ? -1 : 1))

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

export const getBrowserName = () => {
  if (typeof navigator === 'undefined' || !navigator.userAgent) return ''
  const userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.includes('edg')) {
    return 'Microsoft Edge'
  }
  if (userAgent.includes('edge')) {
    return 'Microsoft Edge'
  }
  if (userAgent.includes('edg')) {
    return 'Chromium based edge'
  }
  if (userAgent.includes('opr') && window.opr) {
    return 'Opera'
  }
  if (userAgent.includes('chrome') && window.chrome) {
    return 'Chrome'
  }
  if (userAgent.includes('trident')) {
    return 'Internet Explorer'
  }
  if (userAgent.includes('firefox')) {
    return 'Firefox'
  }
  if (userAgent.includes('safari')) {
    return 'Safari'
  }
  return ''
}

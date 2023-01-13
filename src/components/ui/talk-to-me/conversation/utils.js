export const getTime = lang => {
  const time = new Date().toLocaleTimeString(lang, {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `It's ${time}!`
}

export const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 7 && hour >= 23) {
    return 'Good night.'
  }
  if (hour >= 7 && hour < 12) {
    return 'Good morning'
  }
  if (hour >= 12 && hour < 19) {
    return 'Good afternoon'
  }
  return 'Good evening'
}

export const getDate = lang => {
  const date = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return `Today is ${date.toLocaleDateString(lang, options)}.`
}

const getTime = lang => {
  const time = new Date().toLocaleTimeString(lang, {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `It's ${time}!`
}

const getGreeting = () => {
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

const getDate = lang => {
  const date = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return `Today is ${date.toLocaleDateString(lang, options)}.`
}

export const conversation = [
  {
    inputKeywords: [],
    inputs: ['Hello', 'Hi', 'Good morning'],
    output: `Hello, ${getGreeting()}.`,
  },
  {
    inputs: [
      'Hello',
      'hey',
      'Hi',
      'Hello, how are you',
      'Hi, how are you',
      'Good morning',
    ],
    inputKeywords: [['how', 'are', 'you']],
    output: `I'm fine. and you?.`,
  },
  {
    inputs: ['What day is it', 'what day is today'],
    inputKeywords: [['what', 'day']],
    output: getDate('en'),
  },
  {
    inputs: ['What time is it', 'What is the time'],
    inputKeywords: [['what', 'time']],
    output: getTime('en'),
  },
]

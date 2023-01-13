import { getDate, getGreeting, getTime } from './utils'
export const conversation = [
  {
    inputKeywords: [],
    inputs: [
      'Hello',
      'Hi',
      'Hey',
      'Good morning',
      'Good evening',
      'Good afternoon',
    ],
    output: `Hello, ${getGreeting()}.`,
  },
  {
    inputs: ['Hello, how are you', 'Hi, how are you'],
    inputKeywords: [['how', 'are', 'you']],
    output: `I'm fine. And you?.`,
  },
  {
    inputs: ['Tell me about you', 'Tell me about your experience'],
    inputKeywords: [
      ['tell', 'about', 'you'],
      ['your', 'professional', 'experience'],
    ],
    output: `I'm Mariana, and I've being working as a Software developer for more than 4 years.
    I've being working mainly as Frontend Developer, since I understood this is the area of Software Development
    that I like the most. Currently, I am working in a company that develops game for online casinos.
    Previously, I was developing web applications and portals.`,
  },
  {
    inputs: [
      'What is your technical stack?',
      'With which technologies you have been working with?',
    ],
    inputKeywords: [
      ['technologies', 'you', 'work'],
      ['technologies', 'you', 'know'],
      ['technical', 'stack'],
    ],
    output: `As Frontend Developer, I've been developing skills with TypeScript, JavaScript, and its related libs and frameworks,
    in particular React, Next and Vue. I also work with semantic HTML and CSS, and have interest in mobile development, so I've developed
    some side projects with react Native and Ionic/Capacitor. I also have some experience with Backend Technologies, mainly
    with Node, but in the past I've also worked with Java.`,
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

export const conversationTips = `
Topics to ask:
- Greetings;
- Professional Experience;
- Tech Stack;
- What time is it?
- What day is it?
`

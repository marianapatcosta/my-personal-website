import common from './common.js'

const lightTheme = {
  ...common,
  colors: {
    ...common.colors,
    primary: '#f8f9fa',
    secondary: '#e9ecef',
    tertiary: '#ced4da',
    font: '#343a40',
    disabled: '#aaaaaa',
    shadow: 'rgba(0, 0, 0, 0.7)',
    buttonShadow: '#000000',
    sectionShadow: '#cccccc',
    tooltipShadow: 'rgba(0, 0, 0, 0.5)',
    icon:
      'invert(18%) sepia(3%) saturate(2748%) hue-rotate(169deg) brightness(92%) contrast(84%)',
    iconFont:
      'invert(100%) sepia(0%) saturate(7500%) hue-rotate(99deg) brightness(101%) contrast(101%)',
  },
}

export default lightTheme

export const TOAST_TYPES = {
  ALERT: 'alert',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
}

export const ORIENTATION = {
  LANDSCAPE: 'landscape',
  VERTICAL: 'vertical',
}

export const KEYBOARD_KEY = {
  ENTER_KEY: 'Enter',
  ESCAPE_KEY: 'Escape',
  SPACE_KEY: ' ',
  LEFT_ARROW_KEY: 'ArrowLeft',
  UP_ARROW_KEY: 'ArrowUp',
  RIGHT_ARROW_KEY: 'ArrowRight',
  DOWN_ARROW_KEY: 'ArrowDown',
}

const bubbles = theme => ({
  particles: {
    color: theme.colors.font,
    number: {
      value: 350,
      density: {
        enable: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.5,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 4,
      direction: 'top',
      out_mode: 'out',
    },
  },
  fullScreen: { enable: false },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'bubble',
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 20,
        opacity: 0,
      },
      repulse: {
        distance: 200,
        duration: 2,
      },
    },
  },
})

const snow = theme => ({
  particles: {
    color: theme.colors.font,
    number: {
      value: 250,
      density: {
        enable: false,
      },
    },
    size: {
      value: 7,
      random: true,
    },
    move: {
      direction: 'bottom',
      out_mode: 'out',
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'bubble',
      },
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 4,
        size: 20,
      },
      repulse: {
        distance: 200,
        duration: 4,
      },
      remove: {
        particles_nb: 10,
      },
    },
  },
})

export const PARTICLES_PRESETS = {
  bubbles,
  snow,
}

export const NUMBER_OF_ITEMS_SMALL_SCREEN = 4

export const NUMBER_OF_ITEMS_BIG_SCREEN = 6

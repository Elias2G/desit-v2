//author Wenghofer Dominik
//you can create youre own theme in here



// MEDIA QUERY SETTING

export const breakPoints = {
  s: '(min-width: 0px)',
  ms: '(min-width: 576px)',
  md: '(min-width: 768px)',
  ml: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1600px)',
  shorthands: [
    's', 'ms', 'md', 'ml', 'lg', 'xl'
  ],
};

// COLOR SETTINGS FOR ALL ELEMENTS

export const color = {
  primary: '#20D1D1',
  primaryLight: '#3AC8C8',
  primaryDark: '#005484',

  secondary: '#C926D1',
  secondaryLight: '#D923D3',
  secondaryDark: '#7037C9',

  tertiary: '#3AC856',
  tertiaryLight: '#51eb6f',
  tertiaryDark: '#00846E',

  fontPrimary: '#3b3a3a',
  fontSecondary: '#fafafa',
  fontAccent: '#cd0000'
};

export const buttonColor = {
  primary: color.primary,
  primaryToogle: 'white',
  secondary: color.secondary,
  secondaryToogle: 'white',
  tertiary: color.tertiary,
  tertiaryToogle: 'white',
  primaryDark: color.primaryDark,
  primaryDarkToogle: 'white',
  secondaryDark: color.secondaryDark,
  secondaryDarkToogle: 'white',
  tertiaryDark: color.tertiaryDark,
  tertiaryDarkToogle: 'white',
}

export const gradients = {
  primary: {
    first: color.primaryLight,
    second: color.primaryDark,
  },
  secondary: {
    first: color.secondaryLight,
    second: color.secondaryDark,
  },
  tertiary: {
    first: color.tertiaryLight,
    second: color.tertiaryDark,
  },
}


// PADDING AND MARGIN SETTINGS FOR ALL ELEMENTS

export const padding = {
  subtitle: '10px 0px 10px 0px',
  title: {
    h1: '10px 0px 10px 0px',
    h2: '10px 0px 10px 0px',
    h3: '10px 0px 10px 0px',
    h4: '10px 0px 10px 0px',
    h5: '10px 0px 10px 0px',
    h6: '10px 0px 10px 0px',
  },
  paragraph: '10px 0px 10px 0px',
  button: '17px 33px 17px 33px',
  input: '15px 15px 15px 15px',
  accordion: '15px',
  panel: '15px',
};

export const margin = {
  subtitle: '0',
  title: {
    h1: '0',
    h2: '0',
    h3: '0',
    h4: '0',
    h5: '0',
    h6: '0',
  },
  paragraph: '0',
  button: '0',
  input: '0',
  accordion: '0',
  panel: '0px 0px 15px 0px',
};

// TYPOGRAPHY STYLES settings

export const font = {
  types: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  family: {
    subtitle: 'Roboto',
    title: {
      h1: 'Raleway',
      h2: 'Raleway',
      h3: 'Raleway',
      h4: 'Raleway',
      h5: 'Raleway',
      h6: 'Raleway',
    },
    paragraph: 'Roboto',
    button: 'Roboto',
    input: 'Roboto',
    accordion: 'Roboto',
    panel: 'inherit',
  },

  weight: {
    subtitle: '700',
    title: {
      h1: '500',
      h2: '500',
      h3: '500',
      h4: '500',
      h5: '500',
      h6: '500',
    },
    paragraph: '400',
    button: '700',
    input: '400',
    accordion: '400',
    panel: 'inherit',
  },

  size: {
    subtitle: {
      large: 'calc(13pt + 0.25rem)',
      medium: 'calc(11pt + 0.25rem)',
      small: 'calc(9pt + 0.25rem)',
    },
    title: {
      h1: {
        large: 'calc(16pt + 2rem)',
        medium: 'calc(13pt + 1rem)',
        small: 'calc(15pt + 0.5rem)',
      },
      h2: {
        large: 'calc(10pt + 2rem)',
        medium: 'calc(12pt + 1rem)',
        small: 'calc(14pt + 0.5rem)',
      },
      h3: {
        large: 'calc(12pt + 2rem)',
        medium: 'calc(11pt + 1rem)',
        small: 'calc(13pt + 0.5rem)',
      },
      h4: {
        large: 'calc(10pt + 2rem)',
        medium: 'calc(10pt + 1rem)',
        small: 'calc(12pt + 0.5rem)',
      },
      h5: {
        large: 'calc(8pt + 2rem)',
        medium: 'calc(9pt + 1rem)',
        small: 'calc(11pt + 0.5rem)',
      },
      h6: {
        large: 'calc(6pt + 2rem)',
        medium: 'calc(8pt + 1rem)',
        small: 'calc(10pt + 0.5rem)',
      },
    },
    paragraph: {
      large: 'calc(15pt + 0.10rem)',
      medium: 'calc(13pt + 0.10rem)',
      small: 'calc(10pt + 0.16rem)',
      xsmall: 'calc(8pt + 0.10rem)',
    },
    button: {
      large: 'calc(11pt + 0.25rem)',
      medium: 'calc(9pt + 0.25rem)',
      small: 'calc(6pt + 0.25rem)',
    },
    input: {
      large: 'calc(11pt + 0.25rem)',
      medium: 'calc(9pt + 0.25rem)',
      small: 'calc(6pt + 0.25rem)',
    },
    accordion: {
      large: 'calc(13pt + 0.25rem)',
      medium: 'calc(11pt + 0.25rem)',
      small: 'calc(9pt + 0.25rem)',
    },
    panel: {
      large: 'inherit',
      medium: 'inherit',
      small: 'inherit',
    },
  }
};


// SIMPLE SINGLE STYLES LIKE BORDER AND BOX SHADOW
export const shadow = {
  large: 'box-shadow: 8px 8px 50px rgba(0,0,0,0.22);',
  medium: 'box-shadow: 3px 7px 25px rgba(0,0,0,0.22);',
  small: 'box-shadow: 0 3px 6px rgba(0,0,0,0.22);',
}

export const border = {
  default: '2px solid lightgrey',
}

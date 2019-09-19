//author Wenghofer Dominik
//you can create youre own theme in here



// MEDIA QUERY SETTING

export const breakPoints = {
  s: '(min-width: 0px)',
  ms: '(min-width: 576px)',
  md: '(min-width: 768px)',
  ml: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
  xl: '(min-width: 1600px)'
};

// COLOR SETTINGS FOR ALL ELEMENTS

export const color = {
  primary: '#20D1D1',
  primaryLight: '#20D1D1',
  primaryDark: '#20D1D1',
  secondary: '#C926D1',
  secondaryLight: '#C926D1',
  secondaryDark: '#C926D1',
  tertiary: '#3AC856',
  tertiaryLight: '#3AC856',
  tertiaryDark: '#3AC856',
  fontPrimary: 'black',
  fontSecondary: 'white',
  fontAccent: '#cd0000'
};


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
        large: 'calc(14pt + 2rem)',
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
      large: 'calc(13pt + 0.25rem)',
      medium: 'calc(11pt + 0.25rem)',
      small: 'calc(9pt + 0.25rem)',
    },
  }
};

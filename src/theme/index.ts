interface ITheme {
  font: {
    base: string,
    alternative: string
  },
  color: {
    primary: string,
    accent: string,
    text: string
  }
}

const theme: ITheme = {
    font: {
      base: "'Raleway', 'open-sans'",
      alternative: "'Comfortaa', 'open-sans'"
    },
    color: {
      primary: 'rgb(206, 239, 252)',
      accent: 'rgb(255, 214, 102)',
      text: 'black'
    }
  }
  
  export default theme

  export const MAX_WIDTH = '1400px'
  export const OPTIMAL_WIDTH = '800px'

  export const breakpoints = {
    DESKTOP: '1200px',
    TABLET: '770px',
    MOBILE: '320px'
  }

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
  };
  
  export default theme;
import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RalewayRegular from '../assets/fonts/Raleway-Regular.ttf';
import ComfortaaRegular from '../assets/fonts/Comfortaa-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url(${RalewayRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    src: url(${ComfortaaRegular}) format('truetype');
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
    width: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    color: ${props =>
            props.theme === 'light'
                ? 'black'
                : 'white'};
    font-family: 'Comfortaa';
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${props =>
            props.theme === 'light'
                ? '#FFFFFF'
                : '#23232f'};
                
  }

  #root{
   min-height: 100%;
    display: flex;
  }

:root{
    --black: #000;
    --sea: 92, 154, 177;
    --purple: 176, 131, 228;
    --blue: 35, 180, 233;
    --deep-purple: 98, 66, 158;

    --font-xxs: 12px;
    --font-xs: 14px;
    --font-s: 16px;
    --font-m: 18px;
    --font-l: 24px;
    --font-xl: 28px;
}

`;

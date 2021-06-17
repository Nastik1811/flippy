import styled from 'styled-components'
import theme from 'styled-theming'
import {breakpoints} from '../../theme'

export const primaryColor = theme('theme', {
    light: 'rgb(240, 251, 255)',
    dark: 'rgb(211, 199, 243)',
})

export const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.158);
    z-index: 10;
`

export const Popup = styled.div`
    position: relative;
    margin: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 580px;
    height: auto;
    min-height: 270px;
    border-radius: 10px;
    background-color: ${primaryColor};
    box-shadow: 0 0 20px rgba(0, 61, 87, 0.425);
    background-image: url('https://www.transparenttextures.com/patterns/groovepaper.png');
    padding: 15px 25px;
    animation: transition 0.4s cubic-bezier(0.02, 0.48, 0.66, 0.76) 0s 1;
`
export const PopupHeader = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
`

export const PopupTitle = styled.h3`
    display: inline;
    color: rgb(33, 86, 105);
    font-size: 1.6rem;
`

export const Hr = styled.hr`
    border-color: rgba(80, 132, 151, 0.589);
`

export const PopupContent = styled.div`
    flex-grow: 2;
    padding: 10px;
`

export const PopupContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px 0px;
    height: auto;
    width: 100%;
    gap: 12px;
    align-items: center;
`

export const PopupActions = styled.section`
    margin-top: 5px;
    display: flex;
    justify-content: center;

    @media (min-width: ${breakpoints.TABLET}) {
        justify-content: flex-end;
    }
`

export const PopupButton = styled.button`
    border: none;
    background: transparent;
    font-size: 1.3rem;
`

export const PopupInput = styled.input`
    font-size: 1.5rem;
    background: rgba(255, 255, 255, 0);
    width: 50%;
    padding: 5px;
    text-align: center;
    border: none;
    border-bottom: 2px dashed rgba(129, 184, 204, 0.6);

    &::placeholder {
        color: rgba(129, 184, 204, 0.795);
    }

    &:focus {
        outline: none;
        border-color: rgb(117, 170, 189);
    }
`

export const PopupCheckbox = styled.label`
    font-family: $font-decorative;
    font-weight: 300;
    font-size: 1.2rem;
    color: #000;
    cursor: pointer;
    text-align: left;
    padding-left: 50px;
`

//   @keyframes transition{
//       0%{
//           transform: translateY(-500px);
//       }
//       50%{
//         transform: translateY(50px);
//       }

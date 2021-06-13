import {Link} from 'react-router-dom'
import styled from 'styled-components'
import theme from 'styled-theming'

const shadow = theme('theme', {
    light: '0px 2px 8px rgb(109 120 125 / 0%)',
    dark: '0px 0px 9px rgb(255 205 84 / 78%)',
})

const shadowHover = theme('theme', {
    light: '0px 2px 8px rgb(212 195 145), 0px 2px 8px rgb(255 200 62 / 50%)',
    dark: '-2px 2px 20px rgb(255 200 62 / 50%), 0px 0px 10px rgb(255 202 68 / 73%)',
})

const colorHover = theme('theme', {
    light: 'rgb(255 215 98)',
    dark: 'rgb(255 223 132)',
})

const Button = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    position: relative;
    text-align: center;
    text-decoration: none;
    font-family: inherit;
    color: black;
    border-radius: 8px;
    background-color: rgb(255, 214, 102);
    box-shadow: ${shadow};
    transition: all 0.2s ease;
    padding: 0.8rem 2rem;
    border: none;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid #daa829;
        left: 3px;
        bottom: 3px;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:hover,
    &:focus {
        outline: none;
        background-color: ${colorHover};
        box-shadow: ${shadowHover};
        transform: translate(0, -8px);
        &::before {
            border: 1px solid #d6a832;
            transform: translate(2px, -2px);
        }
    }

    &:focus {
        transform: none;
    }
`

export default Button

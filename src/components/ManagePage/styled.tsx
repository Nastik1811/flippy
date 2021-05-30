import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {breakpoints} from '../../theme'

import theme from 'styled-theming'

export const previewColor = theme('theme', {
    light: '#abdef1',
    dark: '#9e88da',
})

export const previewHoverColor = theme('theme', {
    light: 'rgb(138, 209, 236)',
    dark: 'rgb(121, 95, 194)',
})

export const borderColor = theme('theme', {
    light: 'rgba(55, 115, 145, 0.856)',
    dark: 'rgba(215, 199, 241, 0.856)',
})

export const textColor = theme('theme', {
    light: 'rgb(13, 56, 71);',
    dark: '#ffffff',
})

export const Preview = styled.div`
    position: relative;
    cursor: pointer;
    height: 160px;
    width: 230px;
    border-radius: 6px;
    background-color: ${previewColor};
    display: grid;
    place-items: center;
    color: black;
    background-image: url('https://www.transparenttextures.com/patterns/tex2res5.png');

    &:hover {
        background-color: ${previewHoverColor};
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4);
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        border: 1px solid ${borderColor};
        transition: all 0.1s ease-in;
        left: 4px;
        bottom: 4px;
    }

    &:hover::before {
        transform: translate(6px, -6px);
    }
`

export const NewItemLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    z-index: 10;
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
`

export const PreviewDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 105px;
    overflow: hidden;
    margin: auto;
    width: 90%;
`
export const PreviewDetailsContent = styled.p`
    font-family: var(--font-main);
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
`

export const PreviewFooter = styled.footer`
    font-family: $font-decorative;
    width: 100%;
    position: absolute;
    bottom: 10px;
    font-size: 0.8rem;
    text-align: center;
    color: rgb(82, 148, 173);
`

export const Board = styled.div`
    margin: auto;
    margin-top: 10px;
    border-radius: 20px;
    min-height: 80vh;
`

export const Layout = styled.div`
    display: grid;
    margin-top: 2vw;
`

export const ItemsGrid = styled.div`
    display: grid;
    width: 100%;
    margin: auto;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 250px));
    grid-gap: 20px 10px;

    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        width: 1100px;
    }
`

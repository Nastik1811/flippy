import styled from 'styled-components'
import {breakpoints} from '../../theme'
import Button from '../Button'
import theme from 'styled-theming'

const previewColor = theme('theme', {
    light: 'rgb(206, 237, 252)',
    dark: '#9e88da',
})

const previewHoverColor = theme('theme', {
    light: 'rgb(138, 209, 236)',
    dark: 'rgb(121, 95, 194)',
})

const borderColor = theme('theme', {
    light: 'rgba(55, 115, 145, 0.856)',
    dark: 'rgba(215, 199, 241, 0.856)',
})

export const Layout = styled.div`
    display: grid;
    row-gap: 12px;
    margin-top: 2vw;
`

export const AddButton = styled(Button)`
    @media only screen and (max-width: ${breakpoints.DESKTOP}) {
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 100;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const GreetingContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    row-gap: 12px;
    margin: auto;
    padding: 1.5rem;
    //font-size: 1.5rem;
    //text-align: center;

    @media only screen and (min-width: ${breakpoints.TABLET}) {
        max-width: 650px;
        border: 1px solid rgba(150, 180, 200, 1);
        border-radius: 15px;
    }
`

export const CollectionBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
    gap: 20px;
`

export const Title = styled.h2`
    font-size: 1.4rem;
`

export const CollectionPreview = styled.div`
    position: relative;
    //width: 100%;
    cursor: pointer;
    height: 170px;
    border-radius: 8px;
    background-color: ${previewColor};
    display: grid;
    place-items: center;

    &:hover {
        background-color: ${previewHoverColor};
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4);
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid ${borderColor};
        left: 7px;
        bottom: 7px;
    }
`

export const PreviewContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: grid;
`

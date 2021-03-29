import styled from 'styled-components'
import {device} from '../../theme/breakpoints'
import Button from '../Button'

export const Layout = styled.div`
    display: grid;
    row-gap: 12px;
    margin-top: 2vw;
    `

export const AddButton = styled(Button)`
    @media only screen and ${device.tablet} {
        position: fixed;
        bottom: 70px;
        right: 20px;
        z-index: 100;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
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

    @media only screen and ${device.tablet} {
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

export const Preview = styled.div`
    position: relative;
    //width: 100%;
    height: 170px;
    border-radius: 8px;
    background-color: rgb(206, 239, 252);

    &:hover {
        background-color: rgb(138, 209, 236);
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4);
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgba(55, 115, 145, 0.856);
        left: 7px;
        bottom: 7px;
    }

    &:hover::before {
        border-color: rgb(55, 115, 145);
    }
`

export const PreviewContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: grid;
`
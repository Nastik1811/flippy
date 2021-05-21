import styled from 'styled-components'
import theme from 'styled-theming'

export const CardPreview = styled.div`
    position: relative;
    min-height: 150px;
    min-width: 200px;
    border-radius: 8px;
    background-color: rgb(247, 215, 136);
    display: grid;
    place-items: center;
    color: black;
    background-image: url('https://www.transparenttextures.com/patterns/tex2res5.png');

    &:hover {
        background-color: rgb(253, 215, 119);
        box-shadow: 0px 0px 15px rgba(45, 92, 116, 0.4);
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid rgb(241, 209, 126);
        left: 6px;
        bottom: 6px;
    }

    &:hover::before {
        border-color: rgb(255, 247, 229);
    }
`

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 105px;
    overflow: hidden;
    margin: auto;
    width: 90%;
`
const CardDetailsContent = styled.p`
    font-family: var(--font-main);
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
`

const CardFooter = styled.footer`
    font-family: $font-decorative;
    width: 100%;
    position: absolute;
    bottom: 10px;
    font-size: 0.8rem;
    text-align: center;
    color: rgb(82, 148, 173);
`

export const Board = styled.div`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    gap: 16px;
`

export const Layout = styled.div`
    display: grid;
    row-gap: 12px;
    margin-top: 2vw;
`

export const ItemsGrid = styled.div`
    display: grid;
    width: 100%;
    margin: auto;
    justify-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(260px, 270px));
    grid-gap: 20px 10px;
`

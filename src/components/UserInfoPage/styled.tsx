import styled from 'styled-components'
import theme from 'styled-theming'
import {breakpoints} from '../../theme'
import Button from '../Button'

const primaryColor = theme('theme', {
    light: 'var(--sea)',
    dark: 'var(--purple)',
})
export const Form = styled.label`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    row-gap: 12px;
    column-gap: 12px;
`
export const Input = styled.input`
    height: 45px;
    border: 1px solid rgba(${primaryColor}, 0.5);
    background-color: #fff;
    width: 100%;
    padding: 0.5em;
    font-size: 1.2rem;
    background: rgba(235, 250, 255, 0.1);
    border-radius: 8px;
    &::placeholder {
        color: rgba(${primaryColor}, 0.6);
    }
    &:focus {
        outline: none;
        border: 1px solid rgba(${primaryColor}, 1);
        background: rgba(${primaryColor}, 0.1);
    }
    &:target {
        outline: none;
    }
`

export const Select = styled.select`
    background-color: transparent;
    font-size: 1.2rem;
    padding: 0 5px;
    min-width: 250px;
    border-radius: 10px;
    height: 3rem;
    border: 1px solid rgba(${primaryColor}, 0.5);

    &:focus {
        outline: none;
        //border-color: $color-secondary;
    }
`

export const SaveButton = styled(Button)`
    grid-area: submit;
    font-family: inherit;
    font-size: 1.2rem;
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5vw auto;
    align-items: center;
    gap: 24px;

    @media only screen and (min-width: ${breakpoints.TABLET}) {
        max-width: 650px;
        border: 1px solid rgba(150, 180, 200, 1);
        border-radius: 15px;
        padding: 1.5rem;
    }
`
export const SignOut = styled.button`
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 1.15rem;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    text-shadow: 1px 1px rgba(255, 255, 255, 0);

    &:hover,
    &:focus {
        outline: none;
        text-shadow: 0px 0px 15px rgba(${primaryColor}, 1);
        color: white;
    }
`

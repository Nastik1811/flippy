import {Field, Form, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button'
import theme from 'styled-theming'

const primaryColor = theme('theme', {
    light: 'var(--sea)',
    dark: 'var(--purple)',
})

export const AuthContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    place-items: center;
`

export const AuthForm = styled(Form)`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const Input = styled(Field)`
    grid-area: input;
    height: 45px;
    border: 1px solid rgba(${primaryColor}, 0.5);
    background-color: #fff;
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
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

export const Label = styled.label`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 7fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        'name error'
        'input input';
    row-gap: 4px;
`

export const ErrorContainer = styled.div`
    grid-area: error;
    place-self: end;
    color: rgb(${primaryColor});
    font-weight: 600;
    font-size: var(--font-xs);
`
export const Submit = styled(Button)`
    margin-top: 12px;
    font-size: 1.3rem;
`

export const SwitchLink = styled(Link)`
    color: rgb(${primaryColor});
`
export const Caption = styled.div`
    display: inline-block;
`

export const Title = styled.h1`
    margin-bottom: 0;
`

export const ProvidersContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    width: 100%;
`
export const ProviderAuth = styled.button`
    background-color: transparent;
    border: none;
`

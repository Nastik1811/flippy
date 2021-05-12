import {Field, Form} from 'formik'
import styled from 'styled-components'
import Button from '../Button'

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
    height: 45px;
    border: 1px solid #ccc;
    background-color: #fff;
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    background: transparent;
    border-radius: 8px;
    &::placeholder {
        color: rgba(92, 154, 177, 0.5);
    }
`

export const Submit = styled(Button)`
    margin-top: 1rem;
    font-size: 1.3rem;
`

export const Title = styled.h1``

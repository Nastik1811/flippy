import {Field, Form} from 'formik'
import styled from 'styled-components'

export const AuthContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: grid;
    place-items: center;
    margin-top: 12vw;
`

export const AuthForm = styled(Form)`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled(Field)`
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    background-color: #fff;
`

export const Submit = styled.button`
    width: 200px;
    height: 35px;
    background-color: #5995ef;
    color: #fff;
    border-radius: 3px;
`

export const Title = styled.h1``

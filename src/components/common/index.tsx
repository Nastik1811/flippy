import styled from 'styled-components'
import Button from '../Button'

export const SubmitButton = styled(Button)`
    padding: 0.5rem;
    background-color: rgb(198, 239, 255);
    border-color: rgba(24, 146, 190, 0.5);
    color: $dark-blue-text;
    font-size: 1.7rem;
    font-weight: 500;

    &:hover {
        transform: scale(1.1);
        box-shadow: none;
    }

    &:focus {
        outline: none;
        border-width: 2px;
        box-shadow: 0px 0px 20px rgba(109, 137, 156, 0.3);
    }

    &::after {
        content: none;
    }
`
export const IconButton = styled.button`
    background: none;
    background-color: none;
    background-size: contain;
    border: none;
    background-repeat: no-repeat;
    display: inline-block;
    transition: transform 0.2s ease;
    &:hover {
    }
    &:focus {
        outline: none;
    }
`

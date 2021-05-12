import styled from 'styled-components'

export const BasicPreview = styled.div`
    position: relative;
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
const Button = styled.button`
    position: relative;
    font-family: $font-main;
    font-weight: 400;
    font-size: 1.9rem;
    text-align: center;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    height: fit-content;
    border: 1px solid;
    transition: 0.1s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        border: 1px solid $color-primary-dark;
        left: 7px;
        bottom: 7px;
        border-radius: 10px;
        border: 1px solid;
        left: 4px;
        bottom: 4px;
    }
`

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
        transform: scale(1.1);
    }
    &:focus {
        outline: none;
        transform: scale(1.1);
    }
`

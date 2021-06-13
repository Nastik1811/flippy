import styled from 'styled-components'

export const IconButton = styled.button`
    cursor: pointer;
    background: none;
    background-color: none;
    background-size: contain;
    border: none;
    background-repeat: no-repeat;
    display: inline-block;
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:hover {
        transform: rotateZ(-5deg) scale(1.1);
        .icon-fill {
            fill: currentColor;
        }
    }
    &:focus {
        outline: none;
    }
`

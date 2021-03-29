import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Button = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    position: relative;
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    color: #000000;
    background-color: rgb(255, 214, 102);
    box-shadow: 0 4px 15px rgba(255, 215, 112, 0.62);
    transition: 0.1s ease;
    padding: 0.8rem 2rem;
    border: none;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        border: 1px solid #f3bc30;
        left: 4px;
        bottom: 4px;
    }
`

export default Button

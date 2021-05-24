
import styled from 'styled-components'
import { MAX_WIDTH } from './theme'

export const AppContainer = styled.div`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 6vw;
    width: 100%;
    min-height: 100%;
`
export const ThemeSwitcher= styled.button`
    position: absolute;
    background-color: transparent;
    outline:none;
    border: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: gray;
    position: absolute;
    top: 24px;
    left: 24px;
`

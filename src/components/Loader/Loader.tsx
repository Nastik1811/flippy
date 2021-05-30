import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AnimationContainer = styled.div`
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const stretch = keyframes`
    0% {
        transform: scale(1);
        background-color: $color-primary;
    }
    100% {
        opacity: 100%;
        background-color: $dark-blue-text;
        transform: scale(.5) ;
    }
`

export const Component = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border-radius: 50%;
    opacity: 70%;
    animation-name: ${stretch};
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
`

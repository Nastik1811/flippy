import styled, {keyframes} from 'styled-components'
import theme from 'styled-theming'
import {ReactComponent as moon} from '../../assets/images/SVG/Moon.svg'
import {breakpoints} from '../../theme'

const glowColor = theme('theme', {
    light: '#ffe292',
    dark: '#d3e4f2',
})

const shadowColor = theme('theme', {
    light: '#f4bd4d',
    dark: '#beced3',
})

const craterVisability = theme('theme', {
    light: 'hidden',
    dark: 'visible',
})

const innerShadowColor = theme('theme', {
    light: '#f4bd4d',
    dark: '#b0c8d1',
})

const bodyColor = theme('theme', {
    light: '#f7cf6d',
    dark: '#dae1e5',
})

export const stretch = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(.9) ;
    }
`

export const ThemeSwitcher = ({onClick}: {onClick: () => void}) => {
    return (
        <Wrapper onClick={onClick}>
            <Moon />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 48px;
    height: 48px;
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;

    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        width: 180px;
        height: 180px;
        top: -60px;
        left: -60px;
        transition: transform 0.8s ease-in-out;
        &:hover,
        &:focus {
            transform: translateY(60px) translateX(90px) rotateZ(30deg)
                scale(1.2);
        }
    }
`

const Moon = styled(moon)`
    width: 100%;
    height: 100%;
    animation-name: ${stretch};
    animation-duration: 0.9s;
    animation-timing-function: ease-in;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    .glow {
        fill: ${glowColor};
        opacity: 0.26;
        stroke: none;

    .glow {
        opacity: 1;
    }
        }
    }
    .body {
        fill: ${bodyColor};
        stroke: none;
    }

    .crater,
    .crater-shadow {
        fill: #aabac1;
        stroke: none;
        visibility: ${craterVisability};
    }

    .crater-shadow {
        mix-blend-mode: color-burn;
    }

    .shadow {
        fill: ${shadowColor};
        stroke: none;
    }

    .inner_shadow {
        fill: none;
        stroke: ${innerShadowColor};
        stroke-miterlimit: 10;
        stroke-width: 20px;
    }
`

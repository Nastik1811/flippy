import styled from 'styled-components'
import {ReactComponent as clouds} from '../assets/images/Clouds.svg'
import theme from 'styled-theming'

const cloudColor = theme('theme', {
    light: 'rgba(35, 180, 233, 0.8)',
    dark: '#a07dff',
})

export const Cloud = styled(clouds)`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    touch-action: none;
    width: 100%;
    height: auto;
    #clouds {
        #cloud_1 {
            fill: ${cloudColor};
            fill-opacity: 30%;
        }
        #cloud_2 {
            fill: ${cloudColor};
            fill-opacity: 20%;
        }
        #cloud_3 {
            fill: ${cloudColor};
            fill-opacity: 20%;
        }
    }
`

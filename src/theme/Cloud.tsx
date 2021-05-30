import styled from 'styled-components'
import {ReactComponent as clouds} from '../assets/images/Clouds_up.svg'
import theme from 'styled-theming'

const cloudColor = theme('theme', {
    light: 'rgba(111, 198, 238, 0.411)',
    dark: '#a07dffa7',
})

export const Cloud = styled(clouds)`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    touch-action: none;
    width: 100%;
    height: 100%;
    max-height: 90vw;
    min-width: 500px;
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

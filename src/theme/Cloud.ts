import styled from 'styled-components'
import {ReactComponent as clouds} from '../assets/images/Clouds.svg'

export const Cloud = styled(clouds)`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    touch-action: none;
`

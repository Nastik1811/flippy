import styled from 'styled-components'
import clouds from '../assets/images/Clouds.svg'

export const Cloud = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: url(${clouds}) no-repeat;
    background-size: cover;
`
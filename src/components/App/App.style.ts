
import styled from 'styled-components'
import { breakpoints, MAX_WIDTH } from '../../theme'

export const AppContainer = styled.div`
    max-width: ${MAX_WIDTH};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 40px 6vw;
    width: 100%;
    min-height: 100%;

     @media only screen and (min-width: ${breakpoints.TABLET}) {
        padding: 0 6vw;
    }
`

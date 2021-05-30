import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {breakpoints} from '../../theme'
import {borderColor, textColor, previewColor, previewHoverColor} from './styled'

export const Tabbar = styled.nav`
    margin: auto;
    margin-top: 1vw;
    width: 80vw;

    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        margin-top: 10px;
        width: 900px;
    }
`

const activeClassName = 'nav-item-active'

export const Tab = styled(NavLink).attrs({activeClassName})`
    display: inline;
    z-index: 10;
    color: ${borderColor};
    font-weight: 500;
    text-decoration: none;
    font-size: 1.5rem;
    transition: all 100ms ease;
    line-height: 100%;
    padding: 10px 20px 6px;
    cursor: pointer;
    &:hover {
        color: ${previewHoverColor};
        border-bottom: 2px solid ${previewHoverColor};
    }

    &.${activeClassName} {
        color: ${textColor};
        border-bottom: 2px solid ${textColor};
        &:hover {
            color: ${previewColor};
            border-bottom: 2px solid ${previewColor};
        }
    }
`
export const Hr = styled.hr`
    border: none;
    border-top: 2px solid ${borderColor};
    margin: auto;
    margin-bottom: 24px;
    margin-top: 7px;
    z-index: -1;
    width: 80vw;

    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        width: 900px;
    }
`

import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import bookmark from '../../assets/images/bookmark.svg'
import { breakpoints } from '../../theme'

export const Container = styled.div`
    display: none;
    height: 60px;
    vertical-align: middle;
    line-height: 100%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: ${breakpoints.DESKTOP})  {
        justify-content: space-between;
        display: flex;
    }
`

export const Logo = styled(NavLink)`
    font-family: 'Comfortaa';
    color: black;
    display: block;
    text-decoration: none;
    font-size: 2.2rem;
`

export const NavBar = styled.nav`
    display: none;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    height: 60px;
    line-height: 100%;
    @media only screen and (min-width: ${breakpoints.DESKTOP})  {
        display: grid;
    }
`
const activeClassName = 'nav-item-active'

export const NavItem = styled(NavLink).attrs({activeClassName})`
display: block;
position: relative;
color: black;
text-decoration: none;
font-weight: 500;
font-size: 1.15rem;
padding: 10px;
z-index: 1;

&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    height: 90px;
    padding: 15px 25px;
    transform: translateY(-110px);
    transition: 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    z-index: -1;
    background: url(${bookmark}) no-repeat;
    background-size: 100% 100%;
}

&:hover::before {
    transform: translateY(-50px);
}

&.${activeClassName} {
    font-weight: 600;
    color: #000;
    &::before {
        transform: translateY(-30px);
    }
    &:hover::before {
        transform: translateY(-25px);
    }    
    }
`

export const SignOut = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 1.15rem;
    padding: 10px;
    z-index: 1;

    &:hover {
        color: rgb(76, 167, 202);
    }
`

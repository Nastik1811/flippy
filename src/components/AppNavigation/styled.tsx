import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import bookmark_light from '../../assets/images/bookmark.svg'
import bookmark_dark from '../../assets/images/bookmark_dark1.svg'
import {breakpoints} from '../../theme'
import theme from 'styled-theming'

const primaryColor = theme('theme', {
    light: 'var(--blue)',
    dark: 'var(--purple)',
})

const bookmark = theme('theme', {
    light: bookmark_light,
    dark: bookmark_dark,
})

export const Container = styled.div`
    display: none;
    height: 60px;
    vertical-align: middle;
    line-height: 100%;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        justify-content: space-between;
        display: flex;
    }
`

export const Logo = styled(NavLink)`
    font-family: 'Comfortaa';
    color: inherit;
    display: block;
    text-decoration: none;
    font-size: 2.2rem;
    margin-left: 80px;
`

export const NavBar = styled.nav`
    display: none;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    height: 60px;
    line-height: 100%;
    @media only screen and (min-width: ${breakpoints.DESKTOP}) {
        display: grid;
    }
`
const activeClassName = 'nav-item-active'

export const NavItem = styled(NavLink).attrs({activeClassName})`
    display: block;
    position: relative;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.15rem;
    padding: 10px;
    z-index: 10;

    &::before {
        content: '';
        position: absolute;
        display: block;
        height: 100px;
        width: 100%;
        padding: 15px 20px;
        left: 0px;
        transform: translateY(-120px);
        transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        z-index: -1;
        background: url(${bookmark}) no-repeat;
        background-size: 100% 100%;
    }
    &:hover,
    &:focus {
        outline: none;
        color: black;
    }

    &:hover::before,
    &:focus::before {
        transform: translateY(-60px);
    }

    &.${activeClassName} {
        font-weight: 600;
        color: black;
        &::before {
            transform: translateY(-45px);
        }
        &:hover::before,
        &:focus::before {
            transform: translateY(-40px);
        }
    }
`

export const SignOut = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 1.15rem;
    padding: 10px;
    z-index: 1;
    color: rgb(${primaryColor});
    transition: transform 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    text-shadow: 1px 1px rgba(255, 255, 255, 0);

    &:hover,
    &:focus {
        outline: none;
        text-shadow: 0px 0px 15px rgba(${primaryColor}, 1);
        color: white;
    }
`

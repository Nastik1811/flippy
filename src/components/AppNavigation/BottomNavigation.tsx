import React from 'react'
import {NavLink } from 'react-router-dom'
import styled from 'styled-components'
import icon from '../../assets/icons/icon.svg'
import breakpoints from '../../theme/breakpoints'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ABD5EA;
    @media only screen and ${breakpoints.device.desktop}{
        display: none;
    }
`
const NavBar = styled.nav`
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;

    @media only screen {
        display: none;
    }
`
const activeClassName = 'nav-item-active' 

const NavItem = styled(NavLink).attrs({ activeClassName })`
    display: block;
    z-index: 1;
    width: 24px;
    height: 24px;
    background: url(${icon}) no-repeat;
    background-size: contain;

    &:hover{
       
    } 

    &.${activeClassName} {
    }

`


const BottomNavigation = () => {
    return(
        <Container>
            <NavBar>
                <NavItem to='/home'></NavItem>
                <NavItem to='/overview'></NavItem>
                <NavItem to='/overview'></NavItem>
                <NavItem to='/overview'></NavItem>
            </NavBar>
        </Container>
    )
}

export default BottomNavigation
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from '../../theme/breakpoints'
import SVGIcon from '../SVGIcon'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #abd5ea;
  @media only screen and ${breakpoints.device.desktop} {
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
`
const activeClassName = 'nav-item-active'

const NavItem = styled(NavLink).attrs({ activeClassName })`
  display: block;
  z-index: 1;
  width: 24px;
  height: 24px;
  &:hover {
  }

  &.${activeClassName} {
  }
`

const BottomNavigation = () => {
  return (
    <Container>
      <NavBar>
        <NavItem to='/home'>
          <SVGIcon iconName='pen' />
        </NavItem>
        <NavItem to='/manage'></NavItem>
        <NavItem to='/manage'></NavItem>
        <NavItem to='/manage'></NavItem>
      </NavBar>
    </Container>
  )
}

export default BottomNavigation

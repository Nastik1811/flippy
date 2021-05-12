import {useLocation} from 'react-router'
import SVGIcon from '../SVGIcon'
import {Container, NavItem, NavBar} from './styled'

const BottomNavigation = () => {
    const url = useLocation()
    if (url.pathname === '/card') {
        return null
    }
    return (
        <Container>
            <NavBar>
                <NavItem to='/home'>
                    <SVGIcon iconName='pen' />
                </NavItem>
                <NavItem to='/manage'>
                    <SVGIcon iconName='pen' />
                </NavItem>
                <NavItem to='/manage'>
                    <SVGIcon iconName='pen' />
                </NavItem>
            </NavBar>
        </Container>
    )
}

export default BottomNavigation

import {useLocation} from 'react-router'
import SVGIcon from '../SVGIcon'
import {Container, NavItem, NavBar} from './styled'

const BottomNavigation = () => {
    const url = useLocation()
    if (url.pathname === '/card' || url.pathname === '/review') {
        return null
    }
    return (
        <Container>
            <NavBar>
                <NavItem to='/manage'>
                    <SVGIcon iconName='manage' />
                </NavItem>
                <NavItem to='/home'>
                    <SVGIcon iconName='home' />
                </NavItem>
                <NavItem to='/user'>
                    <SVGIcon iconName='user' />
                </NavItem>
            </NavBar>
        </Container>
    )
}

export default BottomNavigation

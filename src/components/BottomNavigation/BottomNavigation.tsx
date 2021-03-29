import SVGIcon from '../SVGIcon'
import {Container, NavItem, NavBar} from './styled'

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

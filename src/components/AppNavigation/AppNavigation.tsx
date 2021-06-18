import {useFirebase} from '../../context/FirebaseContext'

import {Container, NavBar, NavItem, SignOut, Logo} from './styled'
const AppNavigation = () => {
    const {app} = useFirebase()
    return (
        <Container>
            <Logo to='/'>Flippy</Logo>
            <NavBar>
                <NavItem to='/home'>Home</NavItem>
                <NavItem to='/manage'>Manage</NavItem>
                <NavItem to='/user'>User</NavItem>
                <SignOut to='/signout' onClick={app.signOut}>
                    Sign out
                </SignOut>
            </NavBar>
        </Container>
    )
}

export default AppNavigation

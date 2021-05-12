import {useFirebase} from '../../context/FirebaseContext'
import {useUserInfo} from '../../context/UserContext'

import {Container, NavBar, NavItem, SignOut, Logo} from './styled'
const AppNavigation = () => {
    const {auth} = useFirebase()
    const user = useUserInfo()
    return (
        <Container>
            <Logo to='/'>Flippy</Logo>
            <NavBar>
                <NavItem to='/home'>Home</NavItem>
                <NavItem to='/manage'>Manage</NavItem>
                <SignOut to='/signout' onClick={() => auth.signOut()}>
                    Sign out
                </SignOut>
            </NavBar>
        </Container>
    )
}

export default AppNavigation

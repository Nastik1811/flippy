import {useFirebase} from '../../context/FirebaseContext'
import {useLanguage} from '../../context/LanguageContext'

import {Container, NavBar, NavItem, SignOut, Logo} from './styled'
const AppNavigation = () => {
    const {app} = useFirebase()
    const {strings} = useLanguage()

    return (
        <Container>
            <Logo to='/'>Flippy</Logo>
            <NavBar>
                <NavItem to='/home'>{strings.home}</NavItem>
                <NavItem to='/manage'>{strings.manage}</NavItem>
                <NavItem to='/user'>{strings.settings}</NavItem>
                <SignOut to='/signout' onClick={app.signOut}>
                    {strings.signOut}
                </SignOut>
            </NavBar>
        </Container>
    )
}

export default AppNavigation

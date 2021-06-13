import {Switch, Route, Redirect} from 'react-router-dom'
import {AppContainer} from './App.style'
import AppNavigation from '../AppNavigation'
import AuthPage from '../AuthPage'
import BottomNavigation from '../BottomNavigation'
import CardEditorPage from '../CardEditorPage/CardEditorPage'
import HomePage from '../HomePage'
import Landing from '../Landing'
import ManagePage from '../ManagePage'
import NotFoundPage from '../NotFoundPage'
import ReviewPage from '../ReviewPage'
import {ThemeSwitcher} from '../ThemeSwitcher'
import {useFirebase} from '../../context/FirebaseContext'
import {Cloud} from '../../theme/Cloud'

type AppRoutesPropsType = {
    switchTheme: () => void
}
const AppRoutes = ({switchTheme}: AppRoutesPropsType) => {
    const {user} = useFirebase()
    if (!user) {
        return (
            <AppContainer>
                <Cloud />
                <ThemeSwitcher onClick={switchTheme} />
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/auth' component={AuthPage} />
                    <Redirect path='/home' to='/auth' />
                    <Redirect path='/manage' to='/auth' />
                    <Redirect path='/card' to='/auth' />
                    <Route component={NotFoundPage} />
                </Switch>
            </AppContainer>
        )
    }

    return (
        <AppContainer>
            <Cloud />
            <ThemeSwitcher onClick={switchTheme} />
            <AppNavigation />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/manage' component={ManagePage} />
                <Route path='/card' component={CardEditorPage} />
                <Route path='/review' component={ReviewPage} />
                <Redirect path='/auth' to='/home' />
                <Redirect path='/' to='/home' />
                <Route component={NotFoundPage} />
            </Switch>
            <BottomNavigation />
        </AppContainer>
    )
}

export default AppRoutes

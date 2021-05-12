import {Switch, Route, Redirect} from 'react-router-dom'
import {AppContainer} from './App.style'
import AppNavigation from './components/AppNavigation'
import AuthPage from './components/AuthPage'
import BottomNavigation from './components/BottomNavigation'
import CardEditorPage from './components/CardEditorPage/CardEditorPage'
import HomePage from './components/HomePage'
import Landing from './components/Landing'
import ManagePage from './components/ManagePage'
import NotFoundPage from './components/NotFoundPage'
import {useFirebase} from './context/FirebaseContext'
import {Cloud} from './theme/Cloud'

function App() {
    const {user} = useFirebase()
    if (!user) {
        return (
            <AppContainer>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/auth' component={AuthPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </AppContainer>
        )
    }

    return (
        <AppContainer>
            <Cloud />
            <AppNavigation />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/manage' component={ManagePage} />
                <Route path='/card' component={CardEditorPage} />
                <Redirect path='/auth' to='/home' />
                <Redirect path='/' to='/home' />
                <Route component={NotFoundPage} />
            </Switch>
            <BottomNavigation />
        </AppContainer>
    )
}

export default App

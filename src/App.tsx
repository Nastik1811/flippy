import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {FirebaseProvider} from './context/FirebaseContext'
import {useTheme} from './hooks/useTheme'
import AppRoutes from './AppRoutes'
import Loader from './components/Loader'

function App() {
    const {theme, switchTheme, themeLoaded} = useTheme()

    if (!themeLoaded) {
        return <Loader />
    }

    return (
        <FirebaseProvider>
            <Router>
                <GlobalStyle theme={theme} />
                <ThemeProvider theme={{theme}}>
                    <AppRoutes switchTheme={switchTheme} />
                </ThemeProvider>
            </Router>
        </FirebaseProvider>
    )
}

export default App

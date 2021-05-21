import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {FirebaseProvider} from './context/FirebaseContext'
import {useTheme} from './hooks/useTheme'
import AppRoutes from './AppRoutes'

function App() {
    const {theme, switchTheme, themeLoaded} = useTheme()

    if (!themeLoaded) {
        return <div>Loading</div>
    }

    return (
        <FirebaseProvider>
            <Router>
                <GlobalStyle theme={theme} />
                <button onClick={switchTheme}>CLICK</button>
                <ThemeProvider theme={{theme}}>
                    <AppRoutes />
                </ThemeProvider>
            </Router>
        </FirebaseProvider>
    )
}

export default App

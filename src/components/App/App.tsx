import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from '../../theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {FirebaseProvider} from '../../context/FirebaseContext'
import {useTheme} from '../../hooks/useTheme'
import AppRoutes from './AppRoutes'
import {LanguageProvider} from '../../context/LanguageContext'

function App() {
    const {theme, switchTheme} = useTheme()

    return (
        <FirebaseProvider>
            <Router>
                <GlobalStyle theme={theme} />
                <ThemeProvider theme={{theme}}>
                    <LanguageProvider>
                        <AppRoutes switchTheme={switchTheme} />
                    </LanguageProvider>
                </ThemeProvider>
            </Router>
        </FirebaseProvider>
    )
}

export default App

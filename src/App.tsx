import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './theme/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {FirebaseProvider, useFirebase} from './context/FirebaseContext'
import {useTheme} from './hooks/useTheme'
import useRoutes from './routes'

function App() {
    const {theme} = useTheme()
    const routes = useRoutes()
    return (
        <FirebaseProvider>
            <Router>
                <GlobalStyle theme={theme} />
                <ThemeProvider theme={theme}>{routes}</ThemeProvider>
            </Router>
        </FirebaseProvider>
    )
}

export default App

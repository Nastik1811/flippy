import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'
import reportWebVitals from './services/reportWebVitals'

import {BrowserRouter as Router} from 'react-router-dom'
import theme from './theme'
import {GlobalStyle} from './theme/GlobalStyles'
import {FirebaseProvider} from './context/FirebaseContext'
import {ThemeProvider} from 'styled-components'
ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorkerRegistration.unregister()
reportWebVitals()

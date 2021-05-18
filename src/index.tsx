import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'
import reportWebVitals from './services/reportWebVitals'

import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './theme/GlobalStyles'
import {FirebaseProvider} from './context/FirebaseContext'

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <Router>
                <GlobalStyle />
                <App />
            </Router>
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorkerRegistration.unregister()
reportWebVitals()

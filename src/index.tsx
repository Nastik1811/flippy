import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'
import reportWebVitals from './services/reportWebVitals'
import {FirebaseProvider} from './FirebaseContext'

ReactDOM.render(
    <React.StrictMode>
        <FirebaseProvider>
            <App />
        </FirebaseProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorkerRegistration.unregister()
reportWebVitals()

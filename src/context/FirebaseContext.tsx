import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React, {useContext} from 'react'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

export interface IFirebaseContext {
    app: firebase.app.App
    firestore: firebase.firestore.Firestore
    auth: firebase.auth.Auth
    authProviders: string[]
}

export const FirebaseContext = React.createContext({} as IFirebaseContext)

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }

    return (
        <FirebaseContext.Provider
            value={
                {
                    app: firebase.app(),
                    firestore: firebase.firestore(),
                    auth: firebase.auth(),
                } as IFirebaseContext
            }>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => useContext(FirebaseContext)

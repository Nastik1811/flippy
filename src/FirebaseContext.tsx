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

const initFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
}

export interface IFirebaseContext {
    app: firebase.app.App
}

export interface IFirestoreContext {
    firestore: firebase.firestore.Firestore
}

export interface IAuthContext {
    auth: firebase.auth.Auth
    authProviders: string[]
}

export const FirebaseContext = React.createContext({} as IFirebaseContext)
export const FirestoreContext = React.createContext({} as IFirestoreContext)
export const AuthContext = React.createContext({} as IAuthContext)

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
    initFirebase()

    return (
        <FirebaseContext.Provider
            value={{app: firebase.app()} as IFirebaseContext}>
            <FirestoreContext.Provider
                value={{firestore: firebase.firestore()} as IFirestoreContext}>
                <AuthContext.Provider
                    value={{auth: firebase.auth()} as IAuthContext}>
                    {children}
                </AuthContext.Provider>
            </FirestoreContext.Provider>
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => useContext(FirebaseContext)
export const useFirestore = () => useContext(FirebaseContext)
export const useAuth = () => useContext(FirebaseContext)

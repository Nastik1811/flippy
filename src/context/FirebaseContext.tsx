import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React, {useContext} from 'react'
import Loader from '../components/Loader'
import {DataManger} from './DataManager'
import {Firebase} from './Firebase'

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
    app: Firebase
    manager: DataManger
    user: firebase.User
    authProviders?: string[]
}

export const FirebaseContext = React.createContext({} as IFirebaseContext)

export const FirebaseProvider = ({children}: {children: React.ReactNode}) => {
    const [ready, setReady] = React.useState(false)
    const [user, setUser] = React.useState<firebase.User | null>(null)
    const [app, setApp] = React.useState<Firebase | null>(null)
    const [manager, setManger] = React.useState<DataManger | null>(null)

    React.useEffect(() => {
        setApp(new Firebase(config))
    }, [])

    React.useEffect(() => {
        if (app !== null) {
            setManger(user ? new DataManger(app.getDatabase(), user.uid) : null)
        }
    }, [app, user])

    React.useEffect(() => {
        if (app !== null) {
            app.onAuthStateChanged(user => {
                setUser(user)
                setReady(true)
            })
        }
    }, [app])

    if (!ready) {
        return <Loader />
    }

    return (
        <FirebaseContext.Provider
            value={
                {
                    user,
                    manager,
                    app,
                } as IFirebaseContext
            }>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebase = () => useContext(FirebaseContext)

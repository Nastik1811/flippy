import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import {useFirebase} from './FirebaseContext'

export const UserContext = React.createContext(
    {} as {user: firebase.User | null}
)

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [ready, setReady] = React.useState(false)
    const [user, setUser] = React.useState<firebase.User | null>(null)
    const {auth} = useFirebase()

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)

            if (!ready) {
                setReady(true)
            }
        })
    }, [auth])

    if (!ready) {
        return <div>Load...</div>
    }

    return (
        <UserContext.Provider value={{user}}>{children}</UserContext.Provider>
    )
}

export interface IUserData {
    name?: string
    email: string
    password: string
}

export const useUserInfo = () => React.useContext(UserContext)

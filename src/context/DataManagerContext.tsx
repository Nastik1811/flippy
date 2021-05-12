import 'firebase/auth'
import 'firebase/firestore'
import React, {useContext, useMemo} from 'react'
import {DataManger} from './DataManager'
import {useFirebase} from './FirebaseContext'
import {useUserInfo} from './UserContext'

export interface IDataManagerContext {
    manager: DataManger | null
}

export const DataManagerContext = React.createContext({} as IDataManagerContext)

export const DataManagerProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const {app} = useFirebase()
    const {user} = useUserInfo()

    const uid = user ? user.uid : null
    const manager = useMemo(() => {
        return uid ? new DataManger(app, uid) : null
    }, [app, uid])

    return (
        <DataManagerContext.Provider value={{manager}}>
            {children}
        </DataManagerContext.Provider>
    )
}

export const useDataManager = () => useContext(DataManagerContext)

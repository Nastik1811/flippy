import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import Loader from '../components/Loader'
import {stringsTranslations} from './stringsTranslations'

export type Language = 'ru' | 'en'
const storageName = 'lang'

export interface ILanguageContext {
    strings: {
        [key: string]: string
    }
    switchLanguage: (lang: Language) => void
    language: Language
}

export const LanguageContext = React.createContext({} as ILanguageContext)

export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const [langLoaded, setLangLoaded] = useState(false)
    const [language, setLanguage] = useState<Language>('en')
    const [strings, setStrings] = useState(stringsTranslations['en'])

    const switchLanguage = (lang: Language) => setLanguage(lang)

    useEffect(() => {
        const storedValue = localStorage.getItem(storageName)
        if (storedValue) {
            setLanguage(storedValue as Language)
            setStrings(stringsTranslations[storedValue as Language])
            setLangLoaded(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(storageName, language)
        setStrings(stringsTranslations[language])
    }, [language])

    if (!langLoaded) {
        return <Loader />
    }

    return (
        <LanguageContext.Provider
            value={{
                strings,
                switchLanguage,
                language,
            }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)

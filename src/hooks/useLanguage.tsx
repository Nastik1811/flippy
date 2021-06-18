import {useState, useEffect} from 'react'
import LocalizedStrings from 'react-localization'

const storageName = 'lang'
export type Language = 'ru' | 'en'

const stringsTranslations = {
    en: {
        hello: 'Hello',
        boiledEgg: 'Boiled egg',
        softBoiledEgg: 'Soft-boiled egg',
        choice: 'How to choose the egg',
    },
    ru: {
        hello: 'Привет',
        boiledEgg: 'Uovo sodo',
        softBoiledEgg: 'Uovo alla coque',
        choice: "Come scegliere l'uovo",
    },
}

export const useLanguage = () => {
    const [langLoaded, setLangLoaded] = useState(false)
    const [language, setLanguage] = useState<Language>('en')
    const [strings, setStrings] = useState(stringsTranslations['en'])

    const switchLanguage = (lang: Language) => setLanguage(lang)

    useEffect(() => {
        const storedValue = localStorage.getItem(storageName)
        if (storedValue) {
            setLanguage(storedValue as Language)
            setLangLoaded(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(storageName, language)
    }, [language])

    useEffect(() => {
        setStrings(stringsTranslations[language])
    }, [language])

    return {language, switchLanguage, langLoaded, strings}
}

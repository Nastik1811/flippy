import {useState, useEffect} from 'react'
import {Theme} from '../../types'

const storageName = 'theme'

export const useTheme = () => {
    const [themeLoaded, setThemeLoaded] = useState(false)
    const [theme, setTheme] = useState<Theme>('light')

    const switchTheme = () =>
        setTheme(current => (current === 'light' ? 'dark' : 'light'))

    useEffect(() => {
        const storedValue = localStorage.getItem(storageName)
        if (storedValue) {
            setTheme(storedValue as Theme)
            setThemeLoaded(true)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(storageName, theme)
    }, [theme])

    return {theme, switchTheme, themeLoaded}
}

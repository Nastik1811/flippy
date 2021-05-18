import {useState, useEffect} from 'react'
import {Theme} from '../types'

const storageName = 'theme'

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light')

    const switchTheme = () =>
        setTheme(current => (current === 'light' ? 'dark' : 'light'))

    useEffect(() => {
        const storedValue = localStorage.getItem(storageName)
        if (storedValue) {
            const themeValue = JSON.parse(storedValue) as Theme
            setTheme(themeValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(
            storageName,
            JSON.stringify({
                theme,
            })
        )
    }, [theme])

    return {theme, switchTheme}
}

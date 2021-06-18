import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {Input, Form, Select, SaveButton, Container} from './styled'
import Typography from '../Typography'
import {useLanguage, Language} from '../../hooks/useLanguage'
import Loader from '../Loader'

const UserInfoPage = () => {
    const {app, user} = useFirebase()
    const [userName, setUserName] = useState<string>(user.displayName || '')
    const {language, switchLanguage, langLoaded} = useLanguage()
    const [lang, setLang] = useState<Language>(language)

    useEffect(() => {
        setLang(language)
    }, [language])

    const onSubmit = () => {
        app.setName(userName)
        switchLanguage(lang)
    }

    if (!langLoaded) {
        return <Loader />
    }

    return (
        <Container>
            <Typography size='l'>User Settings</Typography>
            <Form>
                <Typography size='m'>User name</Typography>
                <Input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <Typography size='m'>Choose a language</Typography>
                <Select
                    value={lang}
                    onChange={e => setLang(e.target.value as Language)}>
                    <option value={'en'}>English</option>
                    <option value={'ru'}>Русский</option>
                </Select>
            </Form>
            <SaveButton as='button' onClick={onSubmit}>
                <Typography>Save</Typography>
            </SaveButton>
        </Container>
    )
}

export default UserInfoPage

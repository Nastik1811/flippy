import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {Input, Form, Select, SaveButton, Container, SignOut} from './styled'
import Typography from '../Typography'
import {Language, useLanguage} from '../../context/LanguageContext'

const UserInfoPage = () => {
    const {app, user} = useFirebase()
    const [userName, setUserName] = useState<string>(user.displayName || '')
    const {language, strings, switchLanguage} = useLanguage()
    const [lang, setLang] = useState<Language>(language)

    useEffect(() => {
        setLang(language)
    }, [language])

    const onSubmit = () => {
        app.setName(userName)
        switchLanguage(lang)
    }

    return (
        <Container>
            <Typography size='l'>{strings.settings}</Typography>
            <Form>
                <Typography size='m'>{strings.userName}</Typography>
                <Input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <Typography size='m'>{strings.language}</Typography>
                <Select
                    value={lang}
                    onChange={e => setLang(e.target.value as Language)}>
                    <option value={'en'}>English</option>
                    <option value={'ru'}>Русский</option>
                </Select>
            </Form>
            <SaveButton as='button' onClick={onSubmit}>
                <Typography>{strings.save}</Typography>
            </SaveButton>
            <Typography size='xs' onlyMobile>
                {strings.or}
            </Typography>
            <Typography onlyMobile>
                <SignOut onClick={app.signOut}>{strings.signOut}</SignOut>
            </Typography>
        </Container>
    )
}

export default UserInfoPage

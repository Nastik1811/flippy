import {FormEvent, useState} from 'react'
import {useHistory} from 'react-router'
import {useFirebase} from '../../context/FirebaseContext'
import {useLanguage} from '../../context/LanguageContext'
import {
    Window,
    Popup,
    PopupActions,
    PopupHeader,
    PopupInput,
    PopupContent,
    PopupContainer,
    PopupTitle,
    Hr,
    PopupButton,
} from '../Popup/styled'
import Typography from '../Typography'

const CollectionCreate = () => {
    const {manager} = useFirebase()
    const [name, setName] = useState('')
    const history = useHistory()
    const {strings} = useLanguage()

    const handleSubmit = async (event: FormEvent) => {
        try {
            await manager.addCollection({name})
        } catch (e) {
            alert(e)
        } finally {
            setName('')
            history.push('/manage/collections')
        }
    }

    return (
        <Window>
            <Popup>
                <PopupHeader>
                    <PopupTitle>{strings.createCollection}</PopupTitle>
                    <Hr />
                </PopupHeader>
                <PopupContent>
                    <PopupContainer>
                        <Typography size='m'>
                            {strings.giveNameForCollection}
                        </Typography>
                        <PopupInput
                            type='text'
                            placeholder={strings.collectionName}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </PopupContainer>
                </PopupContent>
                <PopupActions>
                    <PopupButton onClick={handleSubmit}>
                        {strings.create}
                    </PopupButton>
                    <PopupButton onClick={history.goBack}>
                        {strings.back}
                    </PopupButton>
                </PopupActions>
            </Popup>
        </Window>
    )
}

export default CollectionCreate

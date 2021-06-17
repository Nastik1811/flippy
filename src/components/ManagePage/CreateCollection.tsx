import {FormEvent, useState} from 'react'
import {useHistory} from 'react-router'
import {useFirebase} from '../../context/FirebaseContext'
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
                    <PopupTitle>Create collection</PopupTitle>
                    <Hr />
                </PopupHeader>
                <PopupContent>
                    <PopupContainer>
                        <Typography size='m'>
                            Please, give a name for a new collection.
                        </Typography>
                        <PopupInput
                            type='text'
                            placeholder='Collection name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </PopupContainer>
                </PopupContent>
                <PopupActions>
                    <PopupButton onClick={handleSubmit}>Create</PopupButton>
                    <PopupButton onClick={history.goBack}>Back</PopupButton>
                </PopupActions>
            </Popup>
        </Window>
    )
}

export default CollectionCreate

import {FormEvent, useState} from 'react'
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
} from '../Popup/styled'
import Typography from '../Typography'

const CollectionCreate = () => {
    const {manager} = useFirebase()
    const [name, setName] = useState('')

    const handleSubmit = async (event: FormEvent) => {
        try {
            await manager.addCollection(name)
        } catch (e) {
            alert(e)
        } finally {
            setName('')
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
                    <button onClick={handleSubmit}>Create</button>
                    <button>Back</button>
                </PopupActions>
            </Popup>
        </Window>
    )
}

export default CollectionCreate

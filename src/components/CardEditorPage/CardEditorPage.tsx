import {useEffect, useState} from 'react'
import {Redirect, useHistory} from 'react-router'
import {useFirebase} from '../../context/FirebaseContext'
import {ICardDetails, ICollection} from '../../../types'
import CardForm from '../CardForm'
import SVGIcon from '../SVGIcon'
import {
    CardEditor,
    HeaderNav,
    HeaderTitle,
    PageHeader,
    PageHeaderLine,
} from './styled'
import {IconButton} from '../common'

const emptyDetails: ICardDetails = {
    front: '',
    back: '',
    collectionId: '1',
}

const CardEditorPage = () => {
    const {manager} = useFirebase()
    const [initialDetails, setInitialDetails] = useState(emptyDetails)
    const [collections, setCollections] = useState<ICollection[]>([])
    const [completed, setCompleted] = useState(false)
    const history = useHistory()

    useEffect(() => {
        manager!.getCollections().then(data => setCollections(data))
    }, [manager])

    const onSubmit = (details: ICardDetails) => {
        try {
            manager!.addCard(details)
            setCompleted(true)
        } catch (error) {
            alert(error)
        }
    }

    if (completed) {
        return <Redirect to='/manage/cards' />
    }

    return initialDetails ? (
        <CardEditor>
            <PageHeader>
                <HeaderNav>
                    <IconButton onClick={history.goBack}>
                        <SVGIcon iconName='back' />
                    </IconButton>
                </HeaderNav>
                <HeaderTitle>Card editor</HeaderTitle>
                <PageHeaderLine />
            </PageHeader>
            <CardForm
                initialDetails={initialDetails}
                collections={collections}
                onSubmit={onSubmit}
            />
        </CardEditor>
    ) : (
        <div>Loading...</div>
    )
}

export default CardEditorPage

import {useEffect, useState} from 'react'
import {Redirect} from 'react-router'
import {useFirebase} from '../../context/FirebaseContext'
import {BaseCardDetails, Collection} from '../../types'
import CardForm from '../CardForm'
import SVGIcon from '../SVGIcon'
import {
    CardEditor,
    HeaderNav,
    HeaderTitle,
    PageHeader,
    PageHeaderLine,
} from './styled'

const emptyDetails: BaseCardDetails = {
    front: '',
    back: '',
    collection_id: '1',
}

const CardEditorPage = () => {
    const {manager} = useFirebase()
    const [initialDetails, setInitialDetails] = useState(emptyDetails)
    const [collections, setCollections] = useState<Collection[]>([])
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        manager!.getCollections().then(data => setCollections(data))
    }, [manager])

    const onSubmit = (details: BaseCardDetails) => {
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
                    <SVGIcon iconName='back' />
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

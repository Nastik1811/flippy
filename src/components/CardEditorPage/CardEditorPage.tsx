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

const CardEditorPage = () => {
    const {manager} = useFirebase()
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

    return (
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
            <CardForm collections={collections} onSubmit={onSubmit} />
        </CardEditor>
    )
}

export default CardEditorPage

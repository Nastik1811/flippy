import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {useTheme} from '../../hooks/useTheme'
import {ICard} from '../../../types'
import Button from '../Button'
import Loader from '../Loader'
import SVGIcon from '../SVGIcon'
import Typography from '../Typography'
import {
    AddButton,
    GreetingContainer,
    Layout,
    PreviewContent,
    CollectionPreview,
    CollectionBoard,
    PreviewName,
    PreviewDetails,
} from './styled'

const message = `You seem to be new here. Let's add your first card! There is a lot of work ahead =D`

type CollectionLink = {
    id: string
    name: string
    cardsToReview: number
}

const HomePage = () => {
    const {switchTheme} = useTheme()
    const {manager} = useFirebase()
    const [collections, collection] =
        useState<CollectionLink[] | undefined>(undefined)
    const [cards, setCards] = useState<ICard[] | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        let cardsLoading = manager.getCardsToReview().then(setCards)
        let collection = manager.getCollections().then()
        Promise.all([cardsLoading]).then(() => setIsLoading(false))
    }, [manager])

    if (isLoading) {
        return <Loader />
    }

    return (
        <Layout>
            <GreetingContainer>
                <Typography size='xl'>Hello, Anastasia</Typography>
                <Typography size='m'>{message}</Typography>
                <Button to='/'>
                    <Typography size='m'>Review all cards</Typography>
                </Button>
                <AddButton to='/card'>
                    <Typography onlyMobile>
                        <SVGIcon iconName='pen' />
                    </Typography>
                    <Typography onlyDesktop>Add Card</Typography>
                </AddButton>
            </GreetingContainer>
            <Typography size='xl'>Choose a collection</Typography>
            <CollectionBoard>
                {collections?.map(c => (
                    <CollectionPreview key={c.id}>
                        <PreviewContent>
                            <PreviewName>{c.name}</PreviewName>
                            <PreviewDetails>
                                {c.cardsToReview} cards to review
                            </PreviewDetails>
                        </PreviewContent>
                    </CollectionPreview>
                ))}
            </CollectionBoard>
        </Layout>
    )
}

export default HomePage

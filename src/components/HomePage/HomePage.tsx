import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {ICard, ICollection} from '../../../types'
import Button from '../Button'
import Loader from '../Loader'
import SVGIcon from '../SVGIcon'
import Typography from '../Typography'
import path from '../../assets/images/girl2.png'
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
import styled from 'styled-components'
import {useLanguage} from '../../hooks/useLanguage'

const Image = styled.div`
    position: relative;
    top: -50px;
    height: 500px;
    text-align: center;
    background-image: url(${path});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

// interface ICollectionLink {
//     id: string
//     name: string
//     cardsToReview: number
// }

const HomePage = () => {
    const {manager, user} = useFirebase()
    const [collections, setCollections] = useState<ICollection[]>([])
    const [cards, setCards] = useState<ICard[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const {strings} = useLanguage()

    useEffect(() => {
        let cardsLoad = manager.getCardsToReview().then(setCards)
        let collectionsLoad = manager
            .getCollectionToRepeatPreviews()
            .then(setCollections)
        Promise.all([cardsLoad, collectionsLoad]).then(() =>
            setIsLoading(false)
        )
    }, [manager])

    const isUserNew = false
    const message = isUserNew
        ? `You seem to be new here. Let's add your first card! There is a lot of work ahead :)`
        : cards.length > 0
        ? `   You have something to repeat. ${cards.length} cards are awaiting you... Let’s start learning!`
        : `There are no cards ready to repeat. But you can add new one any time! `

    if (isLoading) {
        return <Loader />
    }

    return (
        <Layout>
            <GreetingContainer>
                <Typography size='xl'>
                    {strings.hello}, {user.displayName}
                </Typography>
                <Typography size='m'>{message}</Typography>
                {cards.length > 0 && (
                    <Button to='/review'>
                        <Typography size='m'>Review all cards</Typography>
                    </Button>
                )}
                <AddButton to='/card'>
                    <Typography onlyMobile>
                        <SVGIcon iconName='pen' />
                    </Typography>
                    <Typography onlyDesktop>Add Card</Typography>
                </AddButton>
            </GreetingContainer>
            {collections.length > 0 ? (
                <>
                    <Typography size='xl'>Collection to Review</Typography>
                    <CollectionBoard>
                        {collections?.map(c => (
                            <CollectionPreview key={c.id}>
                                <PreviewContent>
                                    <PreviewName>{c.name}</PreviewName>
                                    <PreviewDetails>
                                        {c.cardsNumber} cards to review
                                    </PreviewDetails>
                                </PreviewContent>
                            </CollectionPreview>
                        ))}
                    </CollectionBoard>
                </>
            ) : (
                <>
                    <Typography size='xl' align='center'>
                        No collections yet
                    </Typography>
                    <Image />
                </>
            )}
        </Layout>
    )
}

export default HomePage

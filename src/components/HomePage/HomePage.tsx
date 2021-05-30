import {useEffect, useState} from 'react'
import {useTheme} from '../../hooks/useTheme'
import Button from '../Button'
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

const temp: CollectionLink[] = [
    {
        id: '1',
        name: 'German',
        cardsToReview: 5,
    },
    {
        id: '2',
        name: 'English',
        cardsToReview: 3,
    },
    {
        id: '3',
        name: 'Philosophy',
        cardsToReview: 10,
    },
]

const HomePage = () => {
    const {switchTheme} = useTheme()
    const [collections, setCollections] =
        useState<CollectionLink[] | undefined>(undefined)

    useEffect(() => {
        setCollections(temp)
    }, [])

    if (!collections) {
        return <div>Loading</div>
    }

    return (
        <Layout>
            <GreetingContainer>
                <Typography size='xl'>Hello, Anastasia</Typography>
                <Typography size='m'>{message}</Typography>
                <Button as='button' onClick={switchTheme}>
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
                {collections.map(c => (
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

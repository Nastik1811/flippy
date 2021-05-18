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
} from './styled'

const message = `You seem to be new here. Let's add your first card! There is a lot of work ahead =D`

const HomePage = () => {
    const {switchTheme} = useTheme()
    const [collections, setCollections] =
        useState<string[] | undefined>(undefined)

    useEffect(() => {
        setCollections(['Collection1', 'Collection2', 'Collection3'])
    }, [])

    if (!collections) {
        return <div>Loading</div>
    }

    return (
        <Layout>
            <GreetingContainer>
                <h1>Hello, Anastasia</h1>
                <p>{message}</p>
                <Button as='button' onClick={switchTheme}>
                    Review all cards
                </Button>
                <AddButton to='/card'>
                    <Typography onlyMobile>
                        <SVGIcon iconName='pen' />
                    </Typography>
                    <Typography onlyDesktop>Add Card</Typography>
                </AddButton>
            </GreetingContainer>
            <Typography>Choose a collection</Typography>
            <CollectionBoard>
                {collections.map(c => (
                    <CollectionPreview key={c}>
                        <PreviewContent>{c}</PreviewContent>
                    </CollectionPreview>
                ))}
            </CollectionBoard>
        </Layout>
    )
}

export default HomePage

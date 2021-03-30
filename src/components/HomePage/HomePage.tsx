import {useEffect, useState} from 'react'
import Button from '../Button'
import SVGIcon from '../SVGIcon'
import Typography from '../Typography'
import {
    AddButton,
    GreetingContainer,
    Layout,
    PreviewContent,
    Preview,
    CollectionBoard,
} from './styled'

const message = `You seem to be new here. Let's add your first card! There is a lot of work ahead =D`

const HomePage = () => {
    const [collections, setCollections] = useState<string[] | undefined>(
        undefined
    )

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
                <Button to='#'>Review all cards</Button>
                <AddButton to='#'>
                    <Typography onlyMobile>
                        <SVGIcon iconName='pen' />
                    </Typography>
                    <Typography onlyDesktop>Add Card</Typography>
                </AddButton>
            </GreetingContainer>
            <Typography>Choose a collection</Typography>
            <CollectionBoard>
                {collections.map(c => (
                    <Preview key={c}>
                        <PreviewContent>{c}</PreviewContent>
                    </Preview>
                ))}
            </CollectionBoard>
        </Layout>
    )
}

export default HomePage

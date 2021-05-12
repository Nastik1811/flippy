import {useEffect, useState} from 'react'
import {BasicPreview} from '../common'
import {ItemsGrid} from './styled'

interface Card {
    id: string
}

const CardsPanel = () => {
    const [cards, setCards] = useState<Card[] | null>(null)

    useEffect(() => {}, [])

    return (
        <ItemsGrid>
            {cards ? cards?.map(c => <BasicPreview key={c.id} />) : null}
        </ItemsGrid>
    )
}

export default CardsPanel

import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {Card} from '../../types'
import {CardPreview, ItemsGrid} from './styled'

const CardsPanel = () => {
    const {manager} = useFirebase()
    const [cards, setCards] = useState<Card[] | null>(null)

    useEffect(() => {
        manager!.getCards().then(data => setCards(data))
    }, [manager])

    return (
        <ItemsGrid>
            {cards
                ? cards?.map(c => (
                      <CardPreview key={c.id}>{c.front}</CardPreview>
                  ))
                : null}
        </ItemsGrid>
    )
}

export default CardsPanel

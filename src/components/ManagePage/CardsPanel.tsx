import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {Card} from '../../types'
import {BasicPreview} from '../common'
import {ItemsGrid} from './styled'

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
                      <BasicPreview key={c.id}>{c.front}</BasicPreview>
                  ))
                : null}
        </ItemsGrid>
    )
}

export default CardsPanel

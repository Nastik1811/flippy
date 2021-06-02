import {useEffect, useState} from 'react'
import {useFirebase} from '../../context/FirebaseContext'
import {ICard} from '../../../types'
import {Preview, ItemsGrid, NewItemLink} from './styled'

const CardsPanel = () => {
    const {manager} = useFirebase()
    const [cards, setCards] = useState<ICard[] | null>(null)

    useEffect(() => {
        manager!.getCards().then(data => setCards(data))
    }, [manager])

    return (
        <ItemsGrid>
            <Preview>
                <NewItemLink to='/card'>+</NewItemLink>
            </Preview>
            {cards
                ? cards?.map(c => <Preview key={c.id}>{c.front}</Preview>)
                : null}
        </ItemsGrid>
    )
}

export default CardsPanel

import {ICard} from '../../../types'
import {StyledCard, CardContent, SideView, TurnCardCaption} from './styled'

type CardPropsType = {
    card: ICard
    isFlipped: boolean
    isNew: boolean
    onClick: () => void
}

const Card = ({card, isFlipped, onClick, isNew}: CardPropsType) => {
    return (
        <StyledCard isFlipped={isFlipped} isNew={isNew} onClick={onClick}>
            <SideView side='front'>
                <CardContent>{card.front}</CardContent>
            </SideView>
            <SideView side='back'>
                <CardContent>{card.back}</CardContent>
            </SideView>
            <TurnCardCaption>Click to flip</TurnCardCaption>
        </StyledCard>
    )
}

export default Card

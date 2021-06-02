import {ICard} from '../../../types'
import {StyledCard, CardContent, SideView, TurnCardCaption} from './styled'

type CardPropsType = {
    card: ICard
    isFlipped: boolean
    onClick: () => void
}

const Card = ({card, isFlipped, onClick}: CardPropsType) => {
    return (
        <StyledCard isFlipped={isFlipped} onClick={onClick}>
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

import {CardType} from '../../types'
import {StyledCard, CardContent, SideView, TurnCardCaption} from './styled'

type CardPropsType = {
    card: CardType
    isFlipped: boolean
    onClick: () => void
}

const Card = ({card, isFlipped, onClick}: CardPropsType) => {
    return (
        <StyledCard isFlipped={isFlipped}>
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

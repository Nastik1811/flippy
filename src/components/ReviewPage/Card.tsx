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
                <CardContent isVisible={!isFlipped}>{card.front}</CardContent>
            </SideView>
            <SideView side='back'>
                <CardContent isVisible={isFlipped}>{card.back}</CardContent>
            </SideView>
            <TurnCardCaption isVisible={!isFlipped}>
                Click to flip
            </TurnCardCaption>
        </StyledCard>
    )
}

export default Card

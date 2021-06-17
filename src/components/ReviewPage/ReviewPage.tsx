import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useFirebase} from '../../context/FirebaseContext'
import {ICard, Ease} from '../../../types'
import Loader from '../Loader'
import Typography from '../Typography'
import Mark from './eases'
import {
    MarkPanel,
    ReviewContainer,
    Layout,
    SessionInfo,
    CongratsImage,
} from './styled'
import Timer from './Timer'
import Card from './Card'
import {
    Window,
    Popup,
    PopupActions,
    PopupButton,
    PopupHeader,
    PopupContent,
    PopupTitle,
    Hr,
} from '../Popup/styled'

const ReviewPage = () => {
    const {manager} = useFirebase()
    const [cards, setCards] = useState<ICard[] | null>(null)
    const [currentCardIndex, setCardIndex] = useState(0)
    const [left, setLeft] = useState(0)
    const [time, setTime] = useState(0)
    const [isOver, setIsOver] = useState(false)
    const [showCongrats, setShowCongrats] = useState(false)
    const [isFlipped, setFlipped] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const name = 'All cards'

    useEffect(() => {
        manager
            .getCardsToReview()
            .then(data => {
                if (data.length !== 0) {
                    setCards(data)
                    return data
                } else {
                    throw Error
                }
            })
            .then(data => setLeft(data.length - 1))
            .catch(() => {
                alert('There is no cards to repeat.')
                setIsOver(true)
            })
    }, [manager])

    useEffect(() => {
        setInterval(() => setTime(c => c + 1), 1000)
    }, [])

    const handleMarkClick = (card: ICard, ease: Ease) => {
        manager.createReview(card, ease)
        setLeft(left - 1)
        if (left !== 0) {
            animateCardFlip()
        } else {
            setShowCongrats(true)
        }
    }

    const animateCardFlip = () => {
        setIsNew(true)
        setVisible(false)
        setTimeout(() => {
            setFlipped(false)
            setIsNew(false)
            setCardIndex(currentCardIndex + 1)
        }, 600)
    }

    if (isOver) {
        return <Redirect to='/home' />
    }

    if (!cards) {
        return <Loader />
    }

    if (showCongrats) {
        return (
            <Window>
                <Popup>
                    <PopupHeader>
                        <PopupTitle>That's all. Good job!</PopupTitle>
                        <Hr />
                    </PopupHeader>
                    <PopupContent>
                        <CongratsImage />
                    </PopupContent>
                    <PopupActions>
                        <PopupButton onClick={() => setIsOver(true)}>
                            Got it!
                        </PopupButton>
                    </PopupActions>
                </Popup>
            </Window>
        )
    }

    return (
        <Layout>
            <ReviewContainer>
                <SessionInfo>
                    <Typography size='l'>{name}</Typography>
                    <Typography>cards left: {left}</Typography>
                    <Timer time={time} />
                </SessionInfo>

                <Card
                    card={cards[currentCardIndex]}
                    onClick={() => {
                        setFlipped(true)
                        setVisible(true)
                    }}
                    isFlipped={isFlipped}
                    isNew={isNew}
                />

                <MarkPanel isVisible={isVisible}>
                    <Mark
                        name='hard'
                        onClick={() =>
                            handleMarkClick(cards[currentCardIndex], 'hard')
                        }
                    />
                    <Mark
                        name='norm'
                        onClick={() =>
                            handleMarkClick(cards[currentCardIndex], 'norm')
                        }
                    />
                    <Mark
                        name='easy'
                        onClick={() =>
                            handleMarkClick(cards[currentCardIndex], 'easy')
                        }
                    />
                </MarkPanel>
            </ReviewContainer>
        </Layout>
    )
}

export default ReviewPage

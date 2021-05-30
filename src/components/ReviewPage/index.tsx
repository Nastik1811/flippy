import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import {useFirebase} from '../../context/FirebaseContext'
import {CardType} from '../../types'
import Loader from '../Loader'
import Typography from '../Typography'
import Mark, {MarkName} from './marks'
import {MarkPanel, ReviewContainer, Layout, SessionInfo} from './styled'
import Timer from './Timer'
import Card from './Card'

const ReviewPage = () => {
    const {manager} = useFirebase()
    const [cards, setCards] = useState<CardType[] | null>(null)
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
        setInterval(() => setTime(c => c + 1), 1000)
    }, [])

    const handleMarkClick = (mark: MarkName) => {
        setIsNew(true)
        setVisible(false)
        setTimeout(() => {
            setFlipped(false)
            setIsNew(false)
        }, 600)
    }

    if (isOver) {
        return <Redirect to='/home' />
    }

    if (!cards) {
        return <Loader />
    }

    return (
        <Layout>
            <ReviewContainer>
                <SessionInfo>
                    <Typography>{name}</Typography>
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
                />

                {
                    <MarkPanel>
                        <Mark markName='good' onClick={handleMarkClick} />
                        <Mark markName='norm' onClick={handleMarkClick} />
                        <Mark markName='bed' onClick={handleMarkClick} />
                    </MarkPanel>
                }
            </ReviewContainer>
        </Layout>
    )
}

export default ReviewPage

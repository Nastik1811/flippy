import {Ease, CardStatus} from '../../types'

export const calculateInterval = (previousInterval: number, delay: number, ease: Ease): number => {
    let newInterval;

    switch(ease){
        case 'hard':
            newInterval = previousInterval + delay/4 
            break;
        case 'norm':
            newInterval = (previousInterval + delay/2 ) * 1.5
            break;
        case 'easy':
            newInterval = (previousInterval + delay) * 2
            break;
        default:
            throw Error
    }

    return newInterval;
}

const SEC = 1000
const MIN = 60 * SEC
const HOUR = 60 * MIN
const DAY = 24 * HOUR

export const SIMPLE_INTERVALS = {
    'easy': HOUR,
    'norm': 25 * MIN,
    'hard': 0
}

export const REVIEW_COEF = {
    'easy': 2,
    'norm': 1.5,
    'hard': 1
}

export const getInterval = (status: CardStatus, ease: Ease, previousInterval: number, delay: number) => {
    switch(status){
        case 'new':
            return SIMPLE_INTERVALS[ease] 
        case 'learning':
            return calculateInterval(previousInterval, delay, ease) 
        case 'reviewing':
            return previousInterval * REVIEW_COEF[ease]
        default:
            return 0 
    }
}

export const getStatus = (status: CardStatus, ease: Ease, nextIntervalInMs:number) : CardStatus => {
        if(status === 'new' && ease === 'easy'){
            return 'learning' 
        }
        if(nextIntervalInMs > 365 * DAY) {
            return 'reviewing'
        }
        return status
}
// const mapDataToReview = ((doc: f): IReviewDetails | undefined => {
//     const review = doc.data()

//     return review ? ({
//         cardId: review.cardId,
//         cardStatus:  review.cardStatus,
//         previousInterval: review.previousInterval, 
//         delay:  review.delay ,
//         ease: review.ease,
//         reviewDate: review.reviewDate
//     }) : undefined
// }

export type Theme = 'light' | 'dark' 
export type Ease = 'hard' | 'norm' | 'easy'
export type CardStatus = 'new' | 'learning' | 'reviewing'
export type CardSide = 'back' | 'front'

export interface ICardDetails{
    front: string
    back: string
    collectionId: string    
}

export interface ICard extends ICardDetails{
    id: string
    status: CardStatus
    reviewsNumber: number
    scheduledReview: Date
    lastReview?: Date
    lastEdit?: Date
    created: Date
}

export interface ICollectionDetails{
       name: string    
}
export interface ICollection extends ICollectionDetails{
    id: string
    lastEdit?: Date
    created: Date
}

export interface IReviewDetails{
    cardId: string
    cardStatus: CardStatus
    previousInterval: number 
    delay: number 
    ease: Ease
    reviewDate: Date
    reviewsNumber: number
}

export interface IReview extends IReviewDetails{
    id: string
}

export interface IAuthUserData {
    name?: string
    email: string
    password: string
}

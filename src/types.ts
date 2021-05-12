export interface BaseCardDetails {
    front: string
    back: string
    collection_id: string
}

export type Collection = {
    id: string
    name: string
}

export type CardSide = 'back' | 'front'

export type Theme = 'light' | 'dark' 

export interface BaseCardDetails {
    front: string
    back: string
    collection_id: string
}

export type Collection = {
    id: string
    name: string
}

export interface Card extends BaseCardDetails {
    id: string
}

export interface IAuthUserData {
    name?: string
    email: string
    password: string
}

export type CardSide = 'back' | 'front'

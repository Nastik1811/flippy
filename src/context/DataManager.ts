import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { ICollection, ICard, CardStatus, Ease, ICardDetails, ICollectionDetails, IReviewDetails} from '../../types'

export const EASE: {[key: string]: Ease}  = {
    EASY: 'easy' ,
    NORM: 'norm',
    HARD: 'hard'
}

export const STATUS: {[key: string]: CardStatus}  = {
    NEW: 'new',
    LEARN: 'learning',
    REVIEW: 'reviewing'
}

export class DataManger {
    firestore: firebase.firestore.Firestore
    uid: string
    userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    cardsRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    reviewRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    collectionsRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    readyCardsRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    defaultCollectionId: string | null

    constructor(firestore: firebase.firestore.Firestore, uid: string) {
        this.firestore = firestore;
        this.uid = uid;
        this.userRef = this.firestore.collection("users").doc(uid);
        this.cardsRef = this.userRef.collection("cards");
        this.collectionsRef = this.userRef.collection("collections");
        this.reviewRef = this.userRef.collection("reviews");
        this.readyCardsRef = this.userRef.collection("readyCards");
        this.defaultCollectionId = null;
    }

    mapDataToCard(doc: firebase.firestore.DocumentData): ICard {
        return ({
            id: doc.id,
            front: doc.data().front,
            back: doc.data().back,
            collectionId: doc.data().collectionId,
            reviewsNumber: doc.data().reviewsNumber,
            status: doc.data().status,
            scheduledReview: doc.data().scheduledReview.toDate(),
            lastReview: doc.data().lastReview?.toDate(),
            lastEdit: doc.data().lastEdit?.toDate(),
            created: doc.data().created.toDate(),
        })
    }

    mapDataToCollection(doc: firebase.firestore.DocumentData): ICollection {
        return ({
            id: doc.id , 
            name: doc.data().name, 
            created: doc.data().created.toDate(),
            lastEdit: doc.data().lastEdit?.toDate()
        })
    }

    addCard(cardDetails: ICardDetails){
        const date = new Date();

        let card = {
            ...cardDetails,
            reviewsNumber: 0,
            created: date,
            lastEdit: date,
            lastReview: null,
            scheduledReview: date,
            status: STATUS.NEW
        }

        this.userRef.collection('cards').add(card);
    }

    async addCollection(collection: ICollectionDetails){
        if(collection.name === "") throw Error("Name should not be empty.")
        let isCollectionExist = await this.collectionsRef.where("name", "==", collection.name).get().then(docs => !docs.empty)
        if(isCollectionExist){
            throw Error("Collection already exists.")  
        } else{
            return this.createCollection(collection.name)
        }
    }

    async createCollection(name: string){
        const date = new Date();
        let collection = {
            name,
            created: date,
            lastEdit: date
        }
        const doc = await this.collectionsRef.add(collection)
        return doc.id
    }

    async getCards(collectionId?: string): Promise<ICard[]> {
        let ref = collectionId ? this.cardsRef.where("collection.id", "==", collectionId) : this.cardsRef
        const query = await ref.get()
        return query.docs.map(this.mapDataToCard)
    }

    async getCollections(){
        let collections: ICollection[] = []
        try{
            const query = await this.collectionsRef.get()
            collections = query.docs.map(this.mapDataToCollection)
        }
        catch(e){
            console.error(e.message)
        }
        finally{
            return collections
        }
    
    }

    async getCardDetails(id: string){
        const doc = await this.cardsRef.doc(id).get()
        return this.mapDataToCard(doc)
    }

    async getCollection(id: string){
        const doc = await this.collectionsRef.doc(id).get()
        return this.mapDataToCollection(doc)
    }

    async getCardsToReview(collectionId?: string){
        const ref = collectionId ? this.cardsRef.where("collectionId", "==", collectionId) : this.cardsRef
        return ref.where("scheduledReview", "<=", new Date()).get().then(query => query.docs.map(this.mapDataToCard) )
    }

    async createReview(card: ICard, ease: Ease){
        const today = new Date()
        const previousInterval = card.lastReview ? card.scheduledReview!.getDate() - card.lastReview.getDate() : 0
        const delay = today.getDate() - card.scheduledReview!.getDate()
        const reviewsNumber = card.reviewsNumber + 1
        const review: IReviewDetails = {
            cardId: card.id,
            cardStatus: card.status,
            previousInterval, 
            delay, 
            ease,
            reviewDate: today,
            reviewsNumber
        }
        this.userRef.collection('reviews').doc(`${card.id}_${reviewsNumber}`).set(review);
    }

    async getTotalRepeatNumber(){
        return this.cardsRef.where("scheduledReview", "<=", new Date()).get().then(query => query.docs.length);
    }

  }

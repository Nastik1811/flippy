import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { BaseCardDetails, Collection } from '../types'

export const MARK = {
    BAD: 0,
    GOOD: 1,
    EXCELLENT: 2
}

export const STATUS = {
    NEW: 0,
    IN_PROGRESS: 1,
    LEARNED: 2
}

export class DataManger {
    firestore: firebase.firestore.Firestore
    uid: string
    userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
    cardsRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    collectionsRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    defaultCollectionId: string | null

    constructor(firestore: firebase.firestore.Firestore, uid: string) {
        this.firestore = firestore;
        this.uid = uid;
        this.userRef = this.firestore.collection("users").doc(uid);
        this.cardsRef = this.userRef.collection("cards");
        this.collectionsRef = this.userRef.collection("collections");
        this.defaultCollectionId = null;
    }

    addCard(cardDetails: BaseCardDetails){
        const date = firebase.firestore.Timestamp.fromDate(new Date());

        let card = {
            ...cardDetails,
            created: date,
            lastEdit: date,
            lastReview: null,
            scheduledReview: date,
            status: STATUS.NEW
        }

        this.userRef.collection('cards').add(card);
    }

    async addCollection(name: string){
        if(name === "") throw Error("Name should not be empty.")
        let isCollectionExist = await this.collectionsRef.where("name", "==", name).get().then(docs => !docs.empty)
        if(isCollectionExist){
            throw Error("Collection already exists.")  
        } else{
            return this.createCollection(name)
        }
    }

    async createCollection(name: string){
        const date = firebase.firestore.Timestamp.fromDate(new Date());
        let collection = {
            name,
            created: date,
            lastEdit: date
        }
        const doc = await this.collectionsRef.add(collection)
        return doc.id
    }

    async getCards(collectionId?: string){
        let ref = collectionId ? this.cardsRef.where("collection.id", "==", collectionId) : this.cardsRef
        const query = await ref.get()
        return query.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    }

    async getCollections(){
        const query = await this.collectionsRef.get()
        return query.docs.map(doc => ({ id: doc.id , name: doc.data().name, created: doc.data().created}))
    }

    async createDefaultCollection(){
        const docId = await this.createCollection("Default")
        console.log(docId)
        this.defaultCollectionId = docId
    }
    
  }

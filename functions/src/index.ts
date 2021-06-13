import * as functions from "firebase-functions"
import admin = require('firebase-admin');
import {getInterval, getStatus} from './utils'

admin.initializeApp(functions.config().firebase)

export const createDefaultCollection = functions.auth.user().onCreate(
    (user) => {
       return admin.firestore().collection('users')
       .doc(user.uid).collection('collections')
       .doc(user.uid)
       .set({
            name: 'Default',
            created: new Date(),
            lastEdit: new Date()
        })
    }
)
    

export const updateCardProgress = 
functions.firestore.document('users/{userId}/reviews/{reviewId}').onCreate(
    (snap, context) => {
       const reviewData = snap.data();
       const nextIntervalInMs = getInterval(reviewData.cardStatus, reviewData.ease, reviewData.previousInterval, reviewData.delay)
       const status = getStatus(reviewData.cardStatus, reviewData.ease, nextIntervalInMs)
   
       const lastReview = new Date()
       const scheduledReview = new Date()
       scheduledReview.setMilliseconds(nextIntervalInMs)

       return admin.firestore().collection('users')
       .doc(context.params.userId).collection('cards')
       .doc(reviewData.cardId)
       .update({
            lastReview,
            scheduledReview,
            status,
            reviewsNumber: reviewData.reviewsNumber
        })
    }
)

export const checkCardsAndNotifyUser = functions.pubsub.schedule('every 24 hours').onRun(() => {
    return admin.firestore().collection('users').get().then(data => data.docs.forEach(async user => {
    
    const cardsToRepeat = (await admin.firestore().collection('users')
        .doc(user.id).collection('cards')
        .where("scheduledReview", "<=", new Date())
        .get()).size

    const tokens: string[] = user.data().notificationTokens
    if(!tokens){
        return null;
    }
    const message: admin.messaging.MessagingPayload = {
        notification: {
            title: `Hey, ${user.data().userName || 'User'}!`,
            body: `Don't forget review your cards! There are ${cardsToRepeat} cards waiting for you!`
        }
    }
    return admin.messaging().sendToDevice(tokens, message).then((response) => {
        console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        })
}))
    
})

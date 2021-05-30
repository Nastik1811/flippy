import * as functions from "firebase-functions"
import admin = require('firebase-admin');

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
       
    }
)


// export const cardReview = functions.firestore.document('/users/{userId}/reviews/{reviewId}').onCreate(
//     () => {}
// )

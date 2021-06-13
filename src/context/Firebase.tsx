import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/messaging'
import {IAuthUserData} from '../../types'

export class Firebase {
    app: firebase.app.App
    googleProvider: firebase.auth.GoogleAuthProvider

    constructor(config: Object) {
        this.app =
            firebase.apps.length === 0
                ? firebase.initializeApp(config)
                : firebase.apps[0]
        this.googleProvider = new firebase.auth.GoogleAuthProvider()
    }

    getDatabase = () => this.app.firestore()
    signOut = () => this.app.auth().signOut()
    onAuthStateChanged = (
        observer:
            | firebase.Observer<any, Error>
            | ((a: firebase.User | null) => any)
    ) => this.app.auth().onAuthStateChanged(observer)
    createUser = ({email, password, name}: IAuthUserData) => {
        this.app
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(cred => {
                if (cred.user) {
                    const updatePromise = cred.user.updateProfile({
                        displayName: name,
                    })
                    const varificationPpromise = cred.user
                        .sendEmailVerification()
                        .then(function () {
                            console.log('sent')
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                    const createDocPromise = this.app
                        .firestore()
                        .collection('users')
                        .doc(cred.user.uid)
                        .set({
                            userName: name,
                            notificationTokens: [],
                        })

                    return Promise.all([
                        updatePromise,
                        varificationPpromise,
                        createDocPromise,
                    ])
                }
            })
    }

    createUserUsingProvider = () => {
        this.app
            .auth()
            .signInWithPopup(this.googleProvider)
            .then(result => {})
            .catch(error => {})
    }

    login = async ({email, password}: IAuthUserData) =>
        await this.app.auth().signInWithEmailAndPassword(email, password)

    setMessaging = (userId: string) => {
        this.app
            .messaging()
            .getToken({vapidKey: process.env.REACT_APP_VAPID_KEY})
            .then(token => {
                token &&
                    this.app
                        .firestore()
                        .collection('users')
                        .doc(userId)
                        .update({
                            notificationTokens:
                                firebase.firestore.FieldValue.arrayUnion(token),
                        })
            })
    }
}

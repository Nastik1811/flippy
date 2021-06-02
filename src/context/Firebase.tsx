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
                    cred.user.updateProfile({
                        displayName: name,
                    })
                    cred.user
                        .sendEmailVerification()
                        .then(function () {
                            console.log('sent')
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                    this.app
                        .firestore()
                        .collection('users')
                        .doc(cred.user.uid)
                        .set({
                            userName: name,
                        })
                }
            })
    }

    createUserUsingProvider = () => {
        this.app
            .auth()
            .signInWithPopup(this.googleProvider)
            .then(result => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential
                // ...
            })
            .catch(error => {})
    }

    login = async ({email, password}: IAuthUserData) =>
        await this.app.auth().signInWithEmailAndPassword(email, password)

    setMessaging = () => {
        this.app.messaging().getToken({})
    }
}

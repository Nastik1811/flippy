import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { IAuthUserData } from '../types';


export class Firebase {
    app: firebase.app.App
    constructor(config: Object) {
        this.app = firebase.apps.length === 0 ? firebase.initializeApp(config) : firebase.apps[0];
    }
    getDatabase = () => this.app.firestore()
    signOut =() => this.app.auth().signOut();
    onAuthStateChanged = (observer:firebase.Observer<any, Error> | ((a: firebase.User | null) => any) ) => this.app.auth().onAuthStateChanged(observer);
    createUser = ({email, password, name}: IAuthUserData) => {
        this.app.auth().createUserWithEmailAndPassword(email, password).then(cred => {
                    if (cred.user){
                        cred.user.updateProfile({
                            displayName: name
                        })
                        this.app.firestore().collection('users').doc(cred.user.uid).set({
                            userName: name
                        })
                    }
                })
    }
    login = async ({email, password}: IAuthUserData) => await this.app.auth().signInWithEmailAndPassword(email, password);
}
